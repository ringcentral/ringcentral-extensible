import Accounts from './Accounts';
import { RingCentralInterface, ParentInterface } from '../../../../types';

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

  accounts(accountId: (string | null) = null): Accounts {
    return new Accounts(this, accountId);
  }
}
export default Index;
