import Pstn from "./Pstn/index.js";
import Web from "./Web/index.js";
import { ParentInterface, RingCentralInterface } from "../../../../../types.js";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path(false)}/pin`;
  }

  public web(pin: string | null = null): Web {
    return new Web(this, pin);
  }

  public pstn(pin: string | null = null): Pstn {
    return new Pstn(this, pin);
  }
}
export default Index;
