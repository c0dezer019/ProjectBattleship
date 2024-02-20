import { HealthValue, Rotation } from '../';

export interface ActorType {
   rotation: Rotation;
   type: string;
   hp: HealthValue;
}
