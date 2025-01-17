import Insights from './Insights';
import type { RingCentralInterface, ParentInterface } from '../../../../../../../../types';

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;
  public sourceRecordId: string | null;

  public constructor(_parent: ParentInterface, sourceRecordId: string | null = null) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.sourceRecordId = sourceRecordId;
  }
  public path(withParameter = true): string {
    if (withParameter && this.sourceRecordId !== null) {
      return `${this._parent.path()}/records/${this.sourceRecordId}`;
    }
    return `${this._parent.path()}/records`;
  }

  public insights(): Insights {
    return new Insights(this);
  }
}
export default Index;
