import Extensions from "./Extensions/index.js";
import {
  ParentInterface,
  RingCentralInterface,
} from "../../../../../../../../../types.js";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;
  public deviceId: string | null;

  public constructor(_parent: ParentInterface, deviceId: string | null = null) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.deviceId = deviceId;
  }
  public path(withParameter = true): string {
    if (withParameter && this.deviceId !== null) {
      return `${this._parent.path()}/devices/${this.deviceId}`;
    }
    return `${this._parent.path()}/devices`;
  }

  public extensions(): Extensions {
    return new Extensions(this);
  }
}
export default Index;
