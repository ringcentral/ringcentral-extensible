import Users from "./Users/index";
import { ParentInterface, RingCentralInterface } from "../../../../../types";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/batch-provisioning`;
  }

  public users(): Users {
    return new Users(this);
  }
}
export default Index;
