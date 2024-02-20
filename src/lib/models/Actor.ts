import type { ActorType, Rotation, HealthValue } from '../utils/types';

class Actor implements ActorType {
   private _rotation: Rotation;
   private _type: string;
   private _hp: HealthValue;

   constructor(hp: HealthValue, type: string, rotation: Rotation = 0) {
      this._hp = hp;
      this._type = type;
      this._rotation = rotation;
   }

   public get rotation(): Rotation {
      return this._rotation;
   }

   public get type(): string {
      return this._type;
   }

   public get hp(): HealthValue {
      return this._hp;
   }

   protected set rotation(rotation: Rotation) {
      this._rotation = rotation;
   }

   protected set type(newType: string) {
      this._type = newType;
   }

   protected set hp(newHealthVal: HealthValue) {
      this._hp = newHealthVal;
   }

}

const t = new Actor(3, 'Battleship')

export default Actor;
