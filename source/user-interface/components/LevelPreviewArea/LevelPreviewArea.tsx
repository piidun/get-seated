import { Component } from "solid-js";
import { Level } from "../../../business-logic/models/Level";
import { PassengerRow } from "../PassengerRow";
import { StagePreviewArea } from "../StagePreviewArea/StagePreviewArea";

export const LevelPreviewArea: Component<{ level: Level }> = (props) => {
  return (
    <div class="w-full flex flex-col items-center gap-4">
      <PassengerRow passengers={props.level.passengers} />
      <StagePreviewArea stage={props.level.stage} />
    </div>
  );
};
