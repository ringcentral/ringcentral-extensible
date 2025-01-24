import Parse from "./Parse";
import type { ParentInterface, RingCentralInterface } from "../../../types";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/number-parser`;
  }

  public parse(): Parse {
    return new Parse(this);
  }
}
export default Index;
