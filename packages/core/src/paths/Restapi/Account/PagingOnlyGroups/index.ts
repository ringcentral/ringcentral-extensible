import BulkAssign from './BulkAssign';
import Devices from './Devices';
import Users from './Users';
import { RingCentralInterface, ParentInterface } from '../../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public pagingOnlyGroupId: string | null;

  public constructor(_parent: ParentInterface, pagingOnlyGroupId: string | null = null) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.pagingOnlyGroupId = pagingOnlyGroupId;
  }

  public path(withParameter = true): string {
    if (withParameter && this.pagingOnlyGroupId !== null) {
      return `${this._parent.path()}/paging-only-groups/${this.pagingOnlyGroupId}`;
    }
    return `${this._parent.path()}/paging-only-groups`;
  }

  public users(): Users {
    return new Users(this);
  }

  public devices(): Devices {
    return new Devices(this);
  }

  public bulkAssign(): BulkAssign {
    return new BulkAssign(this);
  }
}
export default Index;
