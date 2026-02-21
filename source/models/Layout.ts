import { Level } from "./Level.js";
import { SeatId } from "./Stage.js";

/**
 * A proposed solution to a {@link Level}.
 */
export type Layout = {
  readonly passengerSeatIds: readonly SeatId[];
};
