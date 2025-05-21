import States from "./States/index.js";
import Voice from "./Voice/index.js";
import {
  ParentInterface,
  RingCentralInterface,
} from "../../../../../../types.js";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/comm-handling`;
  }

  public voice(): Voice {
    return new Voice(this);
  }

  public states(stateId: string | null = null): States {
    return new States(this, stateId);
  }
}
export default Index;
