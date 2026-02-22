import { Component, For } from "solid-js";
import { Stage } from "../../../business-logic/models/Stage";
import { Tile } from "./Tile";

export const StagePreviewArea: Component<{ stage: Stage }> = (props) => {
  return (
    <div class="flex flex-col">
      <For each={props.stage.tileMatrix}>
        {(tileRow) => (
          <div class="flex flex-row">
            <For each={tileRow}>{(tile) => <Tile tile={tile} />}</For>
          </div>
        )}
      </For>
    </div>
  );
};
