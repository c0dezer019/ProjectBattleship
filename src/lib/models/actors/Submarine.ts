import { Health, Speed, Type } from '@/lib/utils/types';

import { BaseActor } from '..';

class Submarine extends BaseActor {
   constructor() {
      super(Type.Submarine, Health.Submarine, Speed.Submarine);
   }
}

export default Submarine;
