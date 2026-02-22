import { Personality } from "./Personality";

export type Passenger = {
  readonly name: string;
  readonly age: string;
  readonly avatar: string;
  readonly personality: Personality;
};
