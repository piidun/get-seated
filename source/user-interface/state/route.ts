import { createSignal } from "solid-js";

type HomeRoute = {
  readonly route: "home";
};

type LevelSelectorRoute = {
  readonly route: "level-selector";
};

export type Route = HomeRoute | LevelSelectorRoute;

export const [route, setRoute] = createSignal<Route>({ route: "home" });
