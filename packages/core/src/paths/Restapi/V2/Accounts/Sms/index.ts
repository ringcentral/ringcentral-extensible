import Consents from "./Consents/index.js";
import { ParentInterface, RingCentralInterface } from "../../../../../types.js";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/sms`;
  }

  public consents(): Consents {
    return new Consents(this);
  }
}
export default Index;
