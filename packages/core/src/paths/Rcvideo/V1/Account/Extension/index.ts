import Recordings from "./Recordings/index";
import { ParentInterface, RingCentralInterface } from "../../../../../types";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;
  public extensionId: string | null;

  public constructor(
    _parent: ParentInterface,
    extensionId: string | null = null,
  ) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.extensionId = extensionId;
  }
  public path(withParameter = true): string {
    if (withParameter && this.extensionId !== null) {
      return `${this._parent.path()}/extension/${this.extensionId}`;
    }
    return `${this._parent.path()}/extension`;
  }

  public recordings(): Recordings {
    return new Recordings(this);
  }
}
export default Index;
