import { createStage } from "../logic/createStage";
import { Level } from "../models/Level";
import { passengers } from "./passengers";

export const level1: Level = {
  passengers: [passengers.PartyBroOne, passengers.PartyBroTwo],
  stage: createStage(["SS_SS", "SS_SS"]),
};

export const level2: Level = {
  passengers: [
    passengers.BerryFieri,
    passengers.DawnTewakemi,
    passengers.HassatiniBladder,
    passengers.InaMeeting,
    passengers.LemmyTelya,
    passengers.MaxInlove,
    passengers.MaxineInlove,
    passengers.PaigeTurner,
    passengers.PartyBroOne,
    passengers.PartyBroTwo,
    passengers.TerryFied,
  ],
  stage: createStage(["SSS_SSS", "SSS_SSS"]),
};

export const levels = {
  level1,
  level2,
};
