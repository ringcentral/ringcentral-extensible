import type { RingCentralInterface } from "../../types.js";
import Ringsense from "./Ringsense/index.js";

class Index {
  public rc: RingCentralInterface;

  public constructor(rc: RingCentralInterface) {
    this.rc = rc;
  }
  public path(): string {
    return "/ai";
  }

  public ringsense(): Ringsense {
    return new Ringsense(this);
  }
}
export default Index;
