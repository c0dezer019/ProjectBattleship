import { GamePieceHealth, Angle, GamePiece } from '../';

export interface iActor {
	direction: Angle;
	type: GamePiece;
	hp: GamePieceHealth;
	speed: number;
}
