import { createSignal } from "solid-js";
import { Level } from "../../business-logic/models/Level";

type HomeRoute = {
  readonly route: "home";
};

type LevelSelectorRoute = {
  readonly route: "level-selector";
};

type LayoutCreationRoute = {
  readonly route: "layout-creation";
  readonly level: Level;
};

export type Route = HomeRoute | LevelSelectorRoute | LayoutCreationRoute;

export const [route, setRoute] = createSignal<Route>({ route: "home" });
