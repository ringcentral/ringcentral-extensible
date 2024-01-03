import Federation from './Federation';
import Entries from './Entries';
import type { RingCentralInterface, ParentInterface } from '../../../../types';

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/directory`;
  }

  public entries(entryId: string | null = null): Entries {
    return new Entries(this, entryId);
  }

  public federation(): Federation {
    return new Federation(this);
  }
}
export default Index;
