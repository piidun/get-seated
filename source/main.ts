const container = document.querySelector(".character-container");

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
