import Calls from './Calls';
import Parent from '..';
import RingCentral from '../../../../../..';

class Index {
  rc: RingCentral;

  parent: Parent;

  accountId: string | null;

  constructor(parent: Parent, accountId: string | null = null) {
    this.parent = parent;
    this.rc = parent.rc;
    this.accountId = accountId;
  }

  path(withParameter = true): string {
    if (withParameter && this.accountId !== null) {
      return `${this.parent.path()}/accounts/${this.accountId}`;
    }
    return `${this.parent.path()}/accounts`;
  }

  calls(): Calls {
    return new Calls(this);
  }
}
export default Index;
