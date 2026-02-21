import { Level } from "../models/Level.js";
import { createStage } from "../utility/createStage.js";
import { PartyBroOne, PartyBroTwo } from "./passengers.js";

export const level1: Level = {
  passengers: [PartyBroOne, PartyBroTwo],
  stage: createStage(["SS_SS", "SS_SS"]),
};

export const levels = {
  level1,
};
