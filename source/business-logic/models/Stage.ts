import { Map } from "immutable";

export type SeatId = number;

export type SeatConnections = {
  readonly frontClose: SeatId | null;
  readonly frontFar: SeatId | null;
  readonly rightClose: SeatId | null;
  readonly rightFar: SeatId | null;
  readonly backClose: SeatId | null;
  readonly backFar: SeatId | null;
  readonly leftClose: SeatId | null;
  readonly leftFar: SeatId | null;
  readonly hallConnection: { readonly thruSeat: SeatId } | "direct";
};

/**
 * A mechanical representation of a stage.
 */
export type Stage = {
  readonly seatConnectionsMap: Map<SeatId, SeatConnections>;
};
