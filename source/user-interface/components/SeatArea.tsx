import { Component, For } from "solid-js";
import SeatSprite from "../../../assets/airplane-seat.png";
import "./SeatArea.css";

export const SeatArea: Component = () => {
  return (
    <div class="seat-container">
      <For each={Array.from({ length: 24 })}>
        {(index) => (
          <div class="seat" data-seat={index}>
            <img src={SeatSprite} alt="Seat" />
          </div>
        )}
      </For>
    </div>
  );
};
