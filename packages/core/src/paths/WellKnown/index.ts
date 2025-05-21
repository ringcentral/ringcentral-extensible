import OpenidConfiguration from "./OpenidConfiguration/index.js";
import { RingCentralInterface } from "../../types.js";

class Index {
  public rc: RingCentralInterface;

  public constructor(rc: RingCentralInterface) {
    this.rc = rc;
  }
  public path(): string {
    return "/.well-known";
  }

  public openidConfiguration(): OpenidConfiguration {
    return new OpenidConfiguration(this);
  }
}
export default Index;
