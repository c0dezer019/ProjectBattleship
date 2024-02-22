import BaseActor from "./BaseActor";
import { Type, Health, Speed } from "@/lib/utils/types";

class Carrier extends BaseActor {
   constructor() {
      super(Type.Carrier, Health.Carrier, Speed.Carrier);
   }
}

export default Carrier;
