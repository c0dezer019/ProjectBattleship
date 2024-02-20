export type Row = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'i' | 'j';
export type Col = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export type Coordinate = [Row, Col];
export type Rotation = 0 | 90 | 180 | 270;
export type PieceMap = Map<string, Array<Coordinate>>;
export type HealthValue = 1 | 2 | 3 | 4 | 5;
export type GamePiece = 'Battleship' | 'Cruiser' | 'Destroyer' | 'Frigate' | 'Submarine';
