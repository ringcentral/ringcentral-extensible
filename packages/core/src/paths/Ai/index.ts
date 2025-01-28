import Ringsense from "./Ringsense/index";
import Insights from "./Insights/index";
import Status from "./Status/index";
import Audio from "./Audio/index";
import Text from "./Text/index";
import { RingCentralInterface } from "../../types";

class Index {
  public rc: RingCentralInterface;

  public constructor(rc: RingCentralInterface) {
    this.rc = rc;
  }
  public path(): string {
    return "/ai";
  }

  public text(): Text {
    return new Text(this);
  }

  public audio(): Audio {
    return new Audio(this);
  }

  public status(): Status {
    return new Status(this);
  }

  public insights(): Insights {
    return new Insights(this);
  }

  public ringsense(): Ringsense {
    return new Ringsense(this);
  }
}
export default Index;
