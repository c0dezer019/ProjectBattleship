import { BaseActor } from '../';
import { Health, Speed, Type, Angle } from '../../utils/types/';

class Battleship extends BaseActor {
   constructor() {
      super(Type.Battleship, Health.Battleship, Speed.Battleship);
   }
}

export default Battleship;
