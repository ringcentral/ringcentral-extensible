import Webhooks from './Webhooks';
import Events from './Events';
import Parent from '..';
import {RingCentral} from '../../../..';

class Index {
  rc: RingCentral;
  parent: Parent;
  groupId: string | null;

  constructor(parent: Parent, groupId: string | null = null) {
    this.parent = parent;
    this.rc = parent.rc;
    this.groupId = groupId;
  }
  path(withParameter = true): string {
    if (withParameter && this.groupId !== null) {
      return `${this.parent.path()}/groups/${this.groupId}`;
    }
    return `${this.parent.path()}/groups`;
  }

  events(): Events {
    return new Events(this);
  }

  webhooks(): Webhooks {
    return new Webhooks(this);
  }
}
export default Index;
