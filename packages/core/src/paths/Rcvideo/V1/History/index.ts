import Meetings from "./Meetings/index.js";
import Account from "./Account/index.js";
import { ParentInterface, RingCentralInterface } from "../../../../types.js";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path(false)}/history`;
  }

  public account(accountId: string | null = null): Account {
    return new Account(this, accountId);
  }

  public meetings(meetingId: string | null = null): Meetings {
    return new Meetings(this, meetingId);
  }
}
export default Index;
