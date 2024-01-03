import Accounts from './Accounts';
import History from './History';
import Account from './Account';
import type { RingCentralInterface, ParentInterface } from '../../../types';

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path(false)}/v1`;
  }

  public account(accountId: string | null = null): Account {
    return new Account(this, accountId);
  }

  public history(): History {
    return new History(this);
  }

  public accounts(accountId: string | null = null): Accounts {
    return new Accounts(this, accountId);
  }
}
export default Index;
