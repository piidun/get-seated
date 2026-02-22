import { Match, Switch, type Component } from "solid-js";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { LayoutCreationPage } from "./pages/LayoutCreationPage";
import { LevelSelectorPage } from "./pages/LevelSelectorPage";
import { route } from "./state/route";

export const App: Component = () => {
  return (
    <>
      <Switch>
        <Match when={route().route === "home"}>
          <HomePage />
        </Match>
        <Match when={route().route === "level-selector"}>
          <LevelSelectorPage />
        </Match>
        <Match
          when={(() => {
            const r = route();
            return r.route === "layout-creation" && r;
          })()}
        >
          {(route) => <LayoutCreationPage level={route().level} />}
        </Match>
      </Switch>
    </>
  );
};
