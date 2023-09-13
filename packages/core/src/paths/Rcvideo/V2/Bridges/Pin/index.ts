import Pstn from './Pstn';
import Web from './Web';
import { RingCentralInterface, ParentInterface } from '../../../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }

  public path(): string {
    return `${this._parent.path(false)}/pin`;
  }

  public web(pin: (string | null) = null): Web {
    return new Web(this, pin);
  }

  public pstn(pin: (string | null) = null): Pstn {
    return new Pstn(this, pin);
  }
}
export default Index;
