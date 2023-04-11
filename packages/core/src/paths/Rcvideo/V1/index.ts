import Accounts from './Accounts';
import History from './History';
import Account from './Account';
import { RingCentralInterface, ParentInterface } from '../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/v1`;
  }

  account(accountId: (string | null) = null): Account {
    return new Account(this, accountId);
  }

  history(): History {
    return new History(this);
  }

  accounts(accountId: (string | null) = null): Accounts {
    return new Accounts(this, accountId);
  }
}
export default Index;
