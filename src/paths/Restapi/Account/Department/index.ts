import Members from './Members';
import BulkAssign from './BulkAssign';
import Parent from '..';
import RingCentral from '../../../..';

class Index {
  rc: RingCentral;
  departmentId: string | null;
  parent: Parent;

  constructor(parent: Parent, departmentId: string | null = null) {
    this.parent = parent;
    this.rc = parent.rc;
    this.departmentId = departmentId;
  }

  path(withParameter = true): string {
    if (withParameter && this.departmentId !== null) {
      return `${this.parent.path()}/department/${this.departmentId}`;
    }

    return `${this.parent.path()}/department`;
  }

  bulkAssign(): BulkAssign {
    return new BulkAssign(this);
  }

  members(): Members {
    return new Members(this);
  }
}

export default Index;
