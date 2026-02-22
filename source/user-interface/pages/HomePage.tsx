import { Component, For } from "solid-js";
import { Route, setRoute } from "../state/route";

export const HomePage: Component = () => {
  const routeLinks: readonly { label: string; route: Route }[] = [
    {
      label: "Level Selector",
      route: {
        route: "level-selector",
      },
    },
  ];
  return (
    <div class="h-full w-full flex flex-col justify-center items-center gap-2">
      <For each={routeLinks}>
        {(routeLink) => (
          <div
            class="bg-white p-2 cursor-pointer"
            on:click={() => setRoute(routeLink.route)}
          >
            <span class="font-semibold">{routeLink.label}</span>
          </div>
        )}
      </For>
    </div>
  );
};
