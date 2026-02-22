import { Component, Match, Switch } from "solid-js";
import SeatSprite from "../../../../assets/airplane-seat.png";
import WallSprite from "../../../../assets/airplane-wall.png";
import { Tile as TileModel } from "../../../business-logic/models/Stage";

export const Tile: Component<{ tile: TileModel }> = (props) => {
  return (
    <div class="w-16 h-16 flex justify-stretch items-stretch">
      <Switch fallback={<img src={SeatSprite} alt="seat" class="p-1" />}>
        <Match when={props.tile === "out of bounds"}>
          {<img src={WallSprite} alt="wall" />}
        </Match>
        <Match when={props.tile === "walkable"}>{null}</Match>
      </Switch>
    </div>
  );
};
