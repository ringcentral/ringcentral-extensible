import V2 from "./V2/index.js";
import V1 from "./V1/index.js";
import { RingCentralInterface } from "../../types.js";

class Index {
  public rc: RingCentralInterface;

  public constructor(rc: RingCentralInterface) {
    this.rc = rc;
  }
  public path(): string {
    return "/rcvideo";
  }

  public v1(): V1 {
    return new V1(this);
  }

  public v2(): V2 {
    return new V2(this);
  }
}
export default Index;
