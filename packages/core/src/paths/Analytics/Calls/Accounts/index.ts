import Aggregation from './Aggregation';
import Timeline from './Timeline';
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

  timeline(): Timeline {
    return new Timeline(this);
  }

  aggregation(): Aggregation {
    return new Aggregation(this);
  }
}
export default Index;
