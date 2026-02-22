import { createSignal } from "solid-js";
import { levels } from "../data/levels";
import { Level } from "../models/Level";

export const [currentLevel, setCurrentLevel] = createSignal<Level>(
  levels.level1,
);
