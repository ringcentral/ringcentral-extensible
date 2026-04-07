import type {
  ParentInterface,
  RingCentralInterface,
} from "../../../../../types.js";
import Users from "./Users/index.js";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path(false)}/direct-routing`;
  }

  public users(): Users {
    return new Users(this);
  }
}
export default Index;
