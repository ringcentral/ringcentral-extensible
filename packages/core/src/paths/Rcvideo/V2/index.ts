import Bridges from "./Bridges/index";
import Account from "./Account/index";
import { ParentInterface, RingCentralInterface } from "../../../types";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path(false)}/v2`;
  }

  public account(accountId: string | null = null): Account {
    return new Account(this, accountId);
  }

  public bridges(bridgeId: string | null = null): Bridges {
    return new Bridges(this, bridgeId);
  }
}
export default Index;
