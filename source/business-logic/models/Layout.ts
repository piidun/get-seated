import { Level } from "./Level";
import { SeatId } from "./Stage";

/**
 * A proposed solution to a {@link Level}.
 */
export type Layout = {
  readonly passengerSeatIds: readonly SeatId[];
};
