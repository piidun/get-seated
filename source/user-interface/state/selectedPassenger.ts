import { createSignal } from "solid-js";
import { Passenger } from "../../business-logic/models/Passenger";

export const [selectedPassenger, setSelectedPassenger] =
  createSignal<Passenger | null>(null);
