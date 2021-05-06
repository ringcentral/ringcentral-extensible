import BulkAssign from './BulkAssign';
import Devices from './Devices';
import Users from './Users';
import Parent from '..';
import RingCentral from '../../../..';

class Index {
  rc: RingCentral;
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/paging-only-groups`;
  }

  users(): Users {
    return new Users(this);
  }

  devices(): Devices {
    return new Devices(this);
  }

  bulkAssign(): BulkAssign {
    return new BulkAssign(this);
  }
}

export default Index;
