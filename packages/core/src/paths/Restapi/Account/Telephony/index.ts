import Conference from "./Conference/index";
import CallOut from "./CallOut/index";
import Sessions from "./Sessions/index";
import Metadata from "./Metadata/index";
import { ParentInterface, RingCentralInterface } from "../../../../types";

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

  public metadata(): Metadata {
    return new Metadata(this);
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
