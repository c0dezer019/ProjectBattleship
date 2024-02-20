import type { ActorType, Rotation, HealthValue, GamePiece } from '../utils/types';

class Actor implements ActorType {
   private _rotation: Rotation;
   private _type: GamePiece;
   private _hp: HealthValue;

   constructor(hp: HealthValue, type: GamePiece, rotation: Rotation = 0) {
      this._hp = hp;
      this._type = type;
      this._rotation = rotation;
   }

   public get rotation(): Rotation {
      return this._rotation;
   }

   public get type(): GamePiece {
      return this._type;
   }

   public get hp(): HealthValue {
      return this._hp;
   }

   protected set rotation(rotation: Rotation) {
      this._rotation = rotation;
   }

   protected set type(newType: GamePiece) {
      this._type = newType;
   }

   protected set hp(newHealthVal: HealthValue) {
      this._hp = newHealthVal;
   }

}

export default Actor;
