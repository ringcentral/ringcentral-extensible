import Accounts from "./Accounts/index.js";
import { ParentInterface, RingCentralInterface } from "../../../../../types.js";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path(false)}/public`;
  }

  public accounts(accountId: string | null = null): Accounts {
    return new Accounts(this, accountId);
  }
}
export default Index;
