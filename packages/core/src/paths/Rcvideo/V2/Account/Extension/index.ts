import Bridges from "./Bridges/index.js";
import { ParentInterface, RingCentralInterface } from "../../../../../types.js";

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

  public bridges(): Bridges {
    return new Bridges(this);
  }
}
export default Index;
