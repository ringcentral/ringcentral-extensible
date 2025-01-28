import Aggregation from "./Aggregation/index";
import Timeline from "./Timeline/index";
import { ParentInterface, RingCentralInterface } from "../../../../../types";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;
  public accountId: string | null;

  public constructor(
    _parent: ParentInterface,
    accountId: string | null = null,
  ) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.accountId = accountId;
  }
  public path(withParameter = true): string {
    if (withParameter && this.accountId !== null) {
      return `${this._parent.path()}/accounts/${this.accountId}`;
    }
    return `${this._parent.path()}/accounts`;
  }

  public timeline(): Timeline {
    return new Timeline(this);
  }

  public aggregation(): Aggregation {
    return new Aggregation(this);
  }
}
export default Index;
