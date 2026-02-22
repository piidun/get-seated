import { createStage } from "../logic/createStage";
import { Level } from "../models/Level";
import { PartyBroOne, PartyBroTwo } from "./passengers";

export const level1: Level = {
  passengers: [PartyBroOne, PartyBroTwo],
  stage: createStage(["SS_SS", "SS_SS"]),
};

export const levels = {
  level1,
};
