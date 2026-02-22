import { Component, For } from "solid-js";
import { Passenger } from "../../business-logic/models/Passenger";
import "./CharacterArea.css";
import { PassportCard } from "./PassportCard";

export const CharacterArea: Component<{ passengers: readonly Passenger[] }> = (
  props,
) => {
  return (
    <div class="character-container">
      <For each={props.passengers}>
        {(passenger) => <PassportCard passenger={passenger} />}
      </For>
    </div>
  );
};
