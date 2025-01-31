import V1 from "./V1/index.js";
import { RingCentralInterface } from "../../types.js";

class Index {
  public rc: RingCentralInterface;

  public constructor(rc: RingCentralInterface) {
    this.rc = rc;
  }
  public path(): string {
    return "/team-messaging";
  }

  public v1(): V1 {
    return new V1(this);
  }
}
export default Index;
