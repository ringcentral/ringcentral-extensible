import Accounts from './Accounts';
import Parent from '..';
import { RingCentral } from '../../../../..';

class Index {
  rc: RingCentral;

  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/v1`;
  }

  accounts(accountId: string | null = null): Accounts {
    return new Accounts(this, accountId);
  }
}
export default Index;
