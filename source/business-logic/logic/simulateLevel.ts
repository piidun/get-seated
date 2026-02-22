import { Layout } from "../models/Layout";
import { Level } from "../models/Level";
import { Result } from "../models/Result";
import { SimulationEvent } from "../models/SimulationEvent";
import { SimulationResult } from "../models/SimulationResult";
import { ensureLayoutValidForLevel } from "./ensureLayoutValidForLevel";

const unitClamp = (value: number) => Math.max(-1, Math.min(value, 1));

export const simulateLevel = (
  level: Level,
  layout: Layout,
): Result<SimulationResult> => {
  const layoutValidationResult = ensureLayoutValidForLevel(layout, level);
  if (layoutValidationResult.success === false) return layoutValidationResult;

  const events: SimulationEvent[] = [];
  const comfortLevels: number[] = level.passengers.map(() => 0);

  // # Conversations

  const isInConversation: Set<number> = new Set();

  const seatToPassengerIndex = new Map<number, number>();
  for (let i = 0; i < level.passengers.length; i++) {
    seatToPassengerIndex.set(layout.passengerSeatIds[i], i);
  }

  const conversationNeighborOrder = [
    "rightClose",
    "leftClose",
    "rightFar",
    "leftFar",
    "frontClose",
    "backClose",
  ] as const;

  for (
    let initiatorIndex = 0;
    initiatorIndex < level.passengers.length;
    initiatorIndex++
  ) {
    if (isInConversation.has(initiatorIndex)) continue;

    const initiator = level.passengers[initiatorIndex];
    if (initiator.personality.conversationStartingStrength === 0) continue;

    events.push({
      type: "conversation initiation started",
      initiatorIndex: initiatorIndex,
      initiatorStrength: initiator.personality.conversationStartingStrength,
    });

    const initiatorSeatId = layout.passengerSeatIds[initiatorIndex];
    const seatConnections = level.stage.seatConnectionsMap.get(initiatorSeatId);
    if (seatConnections === undefined)
      throw new Error("Seating of conversation initiator not found.");

    for (const direction of conversationNeighborOrder) {
      const neighborSeatId = seatConnections[direction];
      if (neighborSeatId === null) continue;

      const targetIndex = seatToPassengerIndex.get(neighborSeatId);
      if (targetIndex === undefined) continue;
      if (isInConversation.has(targetIndex)) continue;

      const target = level.passengers[targetIndex];
      if (
        initiator.personality.conversationStartingStrength <=
        target.personality.conversationStartingDefense
      ) {
        events.push({
          type: "conversation blocked",
          initiatorIndex: initiatorIndex,
          initiatorStrength: initiator.personality.conversationStartingStrength,
          targetIndex,
          targetDefense: target.personality.conversationStartingDefense,
        });
        continue;
      }

      const intensity =
        (initiator.personality.conversationIntensityContribution +
          target.personality.conversationIntensityContribution) /
        2;

      isInConversation.add(initiatorIndex);
      isInConversation.add(targetIndex);
      events.push({
        type: "conversation begun",
        intensity,
        initiatorIndex: initiatorIndex,
        initiatorStrength: initiator.personality.conversationStartingStrength,
        targetIndex,
        targetDefense: target.personality.conversationStartingDefense,
      });

      const initiatorComfortLevelChange =
        intensity * initiator.personality.ownConversationComfortFactor;
      comfortLevels[initiatorIndex] = unitClamp(
        comfortLevels[initiatorIndex] + initiatorComfortLevelChange,
      );
      const targetComfortLevelChange =
        intensity * target.personality.ownConversationComfortFactor;
      comfortLevels[targetIndex] = unitClamp(
        comfortLevels[targetIndex] + targetComfortLevelChange,
      );

      events.push({
        type: "conversation result",
        intensity,
        initiatorIndex,
        initiatorComfortLevel: comfortLevels[initiatorIndex],
        initiatorComfortLevelChange,
        targetIndex,
        targetComfortLevel: comfortLevels[targetIndex],
        targetComfortLevelChange,
      });
    }
  }

  for (
    let passengerIndex = 0;
    passengerIndex < level.passengers.length;
    passengerIndex++
  ) {
    if (isInConversation.has(passengerIndex)) continue;

    const passengerComfortLevelChange =
      level.passengers[passengerIndex].personality.idleComfortChange;
    comfortLevels[passengerIndex] = unitClamp(
      comfortLevels[passengerIndex] + passengerComfortLevelChange,
    );

    events.push({
      type: "idle result",
      passengerIndex,
      passengerComfortLevel: comfortLevels[passengerIndex],
      passengerComfortLevelChange,
    });
  }

  const score = Math.round(
    comfortLevels.reduce(
      (accumulator, comfortLevel) => accumulator + 500 * (comfortLevel + 1),
      0,
    ),
  );

  return {
    success: true,
    value: {
      score,
      events,
      finalComfortLevels: comfortLevels,
    },
  };
};
