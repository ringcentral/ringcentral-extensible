import Delegators from "./Delegators";
import type {
  ParentInterface,
  RingCentralInterface,
} from "../../../../../types";

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
      return `${this._parent.path()}/extensions/${this.extensionId}`;
    }
    return `${this._parent.path()}/extensions`;
  }

  public delegators(): Delegators {
    return new Delegators(this);
  }
}
export default Index;
