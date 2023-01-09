import Accounts from './Accounts';
import { RingCentralInterface, ParentInterface } from '../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  version: string | null;

  constructor(parent: ParentInterface, version: string | null = 'v1') {
    this.parent = parent;
    this.rc = parent.rc;
    this.version = version;
  }

  path(withParameter = true): string {
    if (withParameter && this.version !== null) {
      return `${this.parent.path()}/calls/${this.version}`;
    }
    return `${this.parent.path()}/calls`;
  }

  accounts(accountId: (string | null) = null): Accounts {
    return new Accounts(this, accountId);
  }
}
export default Index;
