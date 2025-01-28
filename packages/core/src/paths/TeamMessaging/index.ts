import V1 from "./V1/index";
import { RingCentralInterface } from "../../types";

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
