import SipProvision from './SipProvision';
import type { RingCentralInterface, ParentInterface } from '../../../types';

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/client-info`;
  }

  public sipProvision(): SipProvision {
    return new SipProvision(this);
  }
}
export default Index;
