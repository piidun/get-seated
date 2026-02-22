import { createSignal } from "solid-js";
import { Level } from "../models/Level";

export const [mountedLevel, setMountedLevel] = createSignal<Level | null>(null);
