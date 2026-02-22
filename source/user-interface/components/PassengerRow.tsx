import { Component, For } from "solid-js";
import { Passenger } from "../../business-logic/models/Passenger";
import { PassportCard } from "./PassportCard";

export const PassengerRow: Component<{ passengers: readonly Passenger[] }> = (
  props,
) => {
  return (
    <div class="w-full p-2 flex flex-row gap-2 overflow-x-auto justify-items-start">
      <For each={props.passengers}>
        {(passenger) => <PassportCard passenger={passenger} />}
      </For>
    </div>
  );
};
