import V1 from "./V1/index.js";
import { ParentInterface, RingCentralInterface } from "../../../types.js";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path(false)}/notifications`;
  }

  public v1(): V1 {
    return new V1(this);
  }
}
export default Index;
