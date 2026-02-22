import { Personality } from "./Personality.js";

export type Passenger = {
  readonly name: string;
  readonly age: string;
  readonly avatar: string;
  readonly personality: Personality;
};
