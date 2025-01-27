import Calls from "./Calls/index.js";
import { RingCentralInterface } from "../../types.js";

class Index {
  public rc: RingCentralInterface;

  public constructor(rc: RingCentralInterface) {
    this.rc = rc;
  }
  public path(): string {
    return "/analytics";
  }

  public calls(): Calls {
    return new Calls(this);
  }
}
export default Index;
