import Extensions from './Extensions';
import { RingCentralInterface, ParentInterface } from '../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  accountId: string | null;

  constructor(parent: ParentInterface, accountId: string | null = null) {
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

  extensions(extensionId: (string | null) = null): Extensions {
    return new Extensions(this, extensionId);
  }
}
export default Index;
