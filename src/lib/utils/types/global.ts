export type Row = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'i' | 'j';
export type Col = IntRange<0, 10>;
export type Coordinate = [Row, Col];
export type PieceMap = Map<string, Array<Coordinate>>;

export type Enumerate<
	N extends number,
	Acc extends number[] = [],
> = Acc['length'] extends N
	? Acc[number]
   : Enumerate<N, [...Acc, Acc['length']]>;

export type IntRange<F extends number, T extends number> = Exclude<
	Enumerate<T>,
	Enumerate<F>
   >;

export type Angle = IntRange<0, 360>;

export enum Type {
	Carrier = 'CARRIER',
	Battleship = 'BATTLESHIP',
	Cruiser = 'CRUISER',
	Destroyer = 'DESTROYER',
	Submarine = 'SUBMARINE',
}

export enum Health {
	Carrier = 5,
	Battleship = 4,
	Cruiser = 3,
	Submarine = 3,
	Destroyer = 2,
}

export enum Speed {
	Carrier = 35,
	Battleship = 30,
	Cruiser = 33,
	Submarine = 45,
	Destroyer = 30,
}
