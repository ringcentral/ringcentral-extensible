import Calls from "./Calls/index";
import { RingCentralInterface } from "../../types";

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
