import type { Coordinate, PieceMap } from '../types/global';

/**
 * Returns a single map of all pieces into an array of Coordinates.
 * @param map map of where game pieces are set on the board.
 * @returns Array of Coordinate.
 */
export const gameMap = (map: PieceMap): Array<Coordinate> => {
   const _map: Array<Coordinate> = [];

   map.forEach(piece => {
      piece.forEach(coord => {
         _map.push(coord);
      });
   });

   return _map;
};
