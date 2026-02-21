import type { Level } from "../models/Level.js";

const container = document.querySelector(".character-container");

export const renderPassportCards = (level: Level) => {
  if (!container) return;

  container.innerHTML = "";

  level.passengers.forEach((passenger) => {
    container.innerHTML += `
      <div class="passport-card">
        <div class="passport-header">
          <span>PASSPORT</span>
          <span>ID-2048</span>
        </div>

        <div class="passport-body">
          <div class="passport-photo"></div>

          <div class="passport-info">
            <div class="passport-name">${passenger.name}</div>
            <div class="passport-meta">Age: ${passenger.age}</div>
            <div class="passport-desc">Description</div>
          </div>
        </div>
      </div>
    `;
  });
};

if (container) {
  container.addEventListener("click", (e) => {
    const target = e.target;

    if (!(target instanceof Element)) return;

    const card = target.closest(".passport-card");

    if (!card) return;

    document
      .querySelectorAll(".passport-card")
      .forEach((c) => c.classList.remove("selected"));

    card.classList.add("selected");
  });
}
