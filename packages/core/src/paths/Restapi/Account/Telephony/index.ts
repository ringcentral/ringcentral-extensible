import type {
  ParentInterface,
  RingCentralInterface,
} from "../../../../types.js";
import CallOut from "./CallOut/index.js";
import Conference from "./Conference/index.js";
import Sessions from "./Sessions/index.js";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/telephony`;
  }

  public sessions(telephonySessionId: string | null = null): Sessions {
    return new Sessions(this, telephonySessionId);
  }

  public callOut(): CallOut {
    return new CallOut(this);
  }

  public conference(): Conference {
    return new Conference(this);
  }
}
export default Index;
