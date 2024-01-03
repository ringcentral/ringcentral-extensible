import V1 from './V1';
import type { RingCentralInterface, ParentInterface } from '../../../types';

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path(false)}/configuration`;
  }

  public v1(): V1 {
    return new V1(this);
  }
}
export default Index;
