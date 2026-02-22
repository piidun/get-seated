const seatContainer = document.querySelector(".seat-container");

export const renderSeats = () => {
  if (!seatContainer) return;

  seatContainer.innerHTML = "";

  const totalSeats = 24;

  for (let i = 0; i < totalSeats; i++) {
    seatContainer.innerHTML += `
      <div class="seat" data-seat="${i}">
        <img src="/assets/airplane-seat.png" alt="Seat">
      </div>
    `;
  }
};
