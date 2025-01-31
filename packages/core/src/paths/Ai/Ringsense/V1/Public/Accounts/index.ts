import Domains from "./Domains/index.js";
import {
  ParentInterface,
  RingCentralInterface,
} from "../../../../../../types.js";

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

  public domains(domain: string | null = null): Domains {
    return new Domains(this, domain);
  }
}
export default Index;
