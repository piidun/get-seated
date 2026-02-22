import { Layout } from "../models/Layout";
import { Level } from "../models/Level";
import { Result } from "../models/Result";

/**
 * Ensure that the supplied {@link layout} is valid for the supplied {@link level}.
 */
export const ensureLayoutValidForLevel = (
  layout: Layout,
  level: Level,
): Result => {
  if (layout.passengerSeatIds.length !== level.passengers.length)
    return {
      success: false,
      error: `The number of seatings (${
        layout.passengerSeatIds.length
      }) differ from the number of passengers (${level.passengers.length}).`,
    };

  const seatIdSet = level.stage.seatConnectionsMap.keySeq().toSet();

  for (const seatId of layout.passengerSeatIds) {
    if (!seatIdSet.has(seatId))
      return {
        success: false,
        error: `Seat with id ${seatId} does not exist.`,
      };
  }

  return { success: true };
};
