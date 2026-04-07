import type {
  ParentInterface,
  RingCentralInterface,
} from "../../../../types.js";
import DirectRouting from "./DirectRouting/index.js";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/ms-teams`;
  }

  public directRouting(): DirectRouting {
    return new DirectRouting(this);
  }
}
export default Index;
