import type {
  ParentInterface,
  RingCentralInterface,
} from "../../../../../types.js";
import Sync from "./Sync/index.js";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path(false)}/entries`;
  }

  public sync(): Sync {
    return new Sync(this);
  }
}
export default Index;
