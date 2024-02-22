import { Health, Speed, Type } from '@/lib/utils/types';

import { BaseActor } from '../';

class Cruiser extends BaseActor {
	constructor() {
		super(Type.Cruiser, Health.Cruiser, Speed.Cruiser);
	}
}

export default Cruiser;
