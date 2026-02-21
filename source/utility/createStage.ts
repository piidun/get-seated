import { Map } from "immutable";
import { SeatConnections, SeatId, Stage } from "../models/Stage.js";

type Tile = SeatId | "out of bounds" | "walkable";

/**
 * Create a stage with the supplied {@link rowLayouts}.
 *
 * @param rowLayouts The layout of each row. 'X' represents out of bounds, 'S' represents a seat, '_' represents a walkable tile.
 * @returns The {@link Stage}.
 */
export const createStage = (rowLayouts: readonly string[]): Stage => {
  if (rowLayouts.length === 0) throw new Error("At least one row is required.");

  const rowLength = rowLayouts[0].length;

  for (const rowLayout of rowLayouts) {
    if (rowLayout.match(/[^XS_]/))
      throw new Error("Invalid tile type; only 'X', 'S', and '_' are allowed.");

    if (rowLayout.length !== rowLength)
      throw new Error("All rows must have the same number of tiles.");

    if (rowLayout.match(/(^|X)S+(X|$)/))
      throw new Error(
        "Seat sections must have at least one touching walkable section.",
      );
  }

  const seatIdGenerator = (function* (): Generator<SeatId> {
    let id = 0;
    while (true) yield id++;
  })();

  const tilesForRow = (rowLayout: string): Tile[] =>
    Array.from(rowLayout, (char) => {
      if (char === "X") return "out of bounds";
      if (char === "_") return "walkable";
      return seatIdGenerator.next().value; // 'S'
    });

  const matrix: readonly (readonly Tile[])[] = rowLayouts.map(tilesForRow);

  const seatConnectionsMap: Map<SeatId, SeatConnections> = Map(
    matrix
      .flatMap((row, rowIndex) =>
        row.map((tile, colIndex) => ({ tile, rowIndex, colIndex })),
      )
      .filter(
        (cell): cell is { tile: SeatId; rowIndex: number; colIndex: number } =>
          typeof cell.tile === "number",
      )
      .map(({ tile: seatId, rowIndex, colIndex }) => {
        const row = matrix[rowIndex];

        const leftWalkableDist = (() => {
          const i = row
            .slice(0, colIndex)
            .reverse()
            .findIndex((tile) => tile === "walkable");
          return i === -1 ? null : i + 1;
        })();

        const rightWalkableDist = (() => {
          const i = row
            .slice(colIndex + 1)
            .findIndex((tile) => tile === "walkable");
          return i === -1 ? null : i + 1;
        })();

        const hallConnection: SeatConnections["hallConnection"] = (() => {
          if (
            leftWalkableDist !== null &&
            (rightWalkableDist === null ||
              leftWalkableDist <= rightWalkableDist)
          )
            return leftWalkableDist === 1
              ? "direct"
              : { thruSeat: row[colIndex - 1] as SeatId };
          if (rightWalkableDist !== null)
            return rightWalkableDist === 1
              ? "direct"
              : { thruSeat: row[colIndex + 1] as SeatId };
          throw new Error(`Seat ${seatId} has no hall connection.`);
        })();

        const seatOrNull = (tile: Tile | undefined) =>
          typeof tile === "number" ? tile : null;

        return [
          seatId,
          {
            frontClose: seatOrNull(matrix[rowIndex - 1]?.[colIndex]),
            frontFar: seatOrNull(matrix[rowIndex - 2]?.[colIndex]),
            rightClose: seatOrNull(row[colIndex + 1]),
            rightFar: seatOrNull(row[colIndex + 2]),
            backClose: seatOrNull(matrix[rowIndex + 1]?.[colIndex]),
            backFar: seatOrNull(matrix[rowIndex + 2]?.[colIndex]),
            leftClose: seatOrNull(row[colIndex - 1]),
            leftFar: seatOrNull(row[colIndex - 2]),
            hallConnection,
          },
        ] satisfies [SeatId, SeatConnections];
      }),
  );

  return { seatConnectionsMap };
};
