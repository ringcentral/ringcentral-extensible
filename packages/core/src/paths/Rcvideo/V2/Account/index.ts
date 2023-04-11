import Extension from './Extension';
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
      return `${this.parent.path()}/account/${this.accountId}`;
    }
    return `${this.parent.path()}/account`;
  }

  extension(extensionId: (string | null) = null): Extension {
    return new Extension(this, extensionId);
  }
}
export default Index;
