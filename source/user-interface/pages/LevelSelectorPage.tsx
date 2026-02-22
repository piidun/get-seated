import { Component, For, Show } from "solid-js";
import { levels } from "../../business-logic/data/levels";
import {
  mountedLevel,
  setMountedLevel,
} from "../../business-logic/state/mountedLevel";
import { LevelPreviewArea } from "../components/LevelPreviewArea/LevelPreviewArea";

export const LevelSelectorPage: Component = () => {
  return (
    <div class="grid grid-cols-2 gap-4">
      <div class="flex flex-col gap-2">
        <For each={Object.values(levels)}>
          {(level, index) => (
            <div
              class="bg-white p-2 cursor-pointer"
              on:click={() => setMountedLevel(level)}
            >
              <span class="font-semibold">Level {index()}</span>
            </div>
          )}
        </For>
      </div>
      <div>
        <Show when={mountedLevel() !== null && mountedLevel()}>
          {(mountedLevel) => <LevelPreviewArea level={mountedLevel()} />}
        </Show>
      </div>
    </div>
  );
};
