import { Health, Speed, Type } from '@/lib/utils/types';

import { BaseActor } from '..';

class Destroyer extends BaseActor {
   constructor() {
      super(Type.Destroyer, Health.Destroyer, Speed.Destroyer);
   }
}

export default Destroyer;
