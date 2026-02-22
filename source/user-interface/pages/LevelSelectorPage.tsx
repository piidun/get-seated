import { Component, createSignal, For, Show } from "solid-js";
import { levels } from "../../business-logic/data/levels";
import { Level } from "../../business-logic/models/Level";
import { LevelPreviewArea } from "../components/LevelPreviewArea/LevelPreviewArea";
import { setRoute } from "../state/route";

export const LevelSelectorPage: Component = () => {
  const [selectedLevel, setSelectedLevel] = createSignal<Level | null>(null);

  return (
    <div class="h-full flex flex-col gap-4">
      <div class="grid grid-cols-2 gap-4">
        <div class="flex flex-col gap-2">
          <For each={Object.values(levels)}>
            {(level, index) => (
              <div
                class="cursor-pointer p-2"
                classList={{
                  "bg-white": level !== selectedLevel(),
                  "bg-gray-200": level === selectedLevel(),
                }}
                on:click={() => setSelectedLevel(level)}
              >
                <span class="font-semibold">Level {index()}</span>
              </div>
            )}
          </For>
        </div>
        <div>
          <Show when={selectedLevel() !== null && selectedLevel()}>
            {(selectedLevel) => <LevelPreviewArea level={selectedLevel()} />}
          </Show>
        </div>
      </div>
      <div
        class="bg-green-500 cursor-pointer p-2"
        on:click={() => {
          const localLevel = selectedLevel();
          if (localLevel === null) return;

          setRoute({ route: "layout-creation", level: localLevel });
        }}
      >
        <span class="font-semibold">Play!</span>
      </div>
    </div>
  );
};
