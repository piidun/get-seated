import type { Component } from "solid-js";
import { currentLevel } from "../business-logic/state/currentLevel";
import "./App.css";
import { CharacterArea } from "./components/CharacterArea";
import { SeatArea } from "./components/SeatArea";

export const App: Component = () => {
  return (
    <div class="flex flex-col items-center gap-2">
      <h1>Get seated</h1>

      <div class="main-grid-layout">
        <section>
          <CharacterArea passengers={currentLevel().passengers} />
        </section>
        <section>
          <SeatArea />
        </section>
      </div>
    </div>
  );
};
