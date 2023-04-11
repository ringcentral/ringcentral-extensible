import Delegators from './Delegators';
import { RingCentralInterface, ParentInterface } from '../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  extensionId: string | null;

  constructor(parent: ParentInterface, extensionId: string | null = null) {
    this.parent = parent;
    this.rc = parent.rc;
    this.extensionId = extensionId;
  }

  path(withParameter = true): string {
    if (withParameter && this.extensionId !== null) {
      return `${this.parent.path()}/extensions/${this.extensionId}`;
    }
    return `${this.parent.path()}/extensions`;
  }

  delegators(): Delegators {
    return new Delegators(this);
  }
}
export default Index;
