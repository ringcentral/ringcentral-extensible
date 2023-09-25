import BulkAdd from './BulkAdd';
import type { RingCentralInterface, ParentInterface } from '../../../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }

  public path(): string {
    return `${this._parent.path()}/devices`;
  }

  public bulkAdd(): BulkAdd {
    return new BulkAdd(this);
  }
}
export default Index;
