import { HealthValue, Rotation, GamePiece } from '../';

export interface ActorType {
   rotation: Rotation;
   type: GamePiece;
   hp: HealthValue;
}
