import Parse from "./Parse/index.js";
import { RingCentralInterface, ParentInterface } from "../../../../types.js";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path(false)}/number-parser`;
  }

  public parse(): Parse {
    return new Parse(this);
  }
}
export default Index;
