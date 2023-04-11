import Pstn from './Pstn';
import Web from './Web';
import { RingCentralInterface, ParentInterface } from '../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/pin`;
  }

  web(pin: (string | null) = null): Web {
    return new Web(this, pin);
  }

  pstn(pin: (string | null) = null): Pstn {
    return new Pstn(this, pin);
  }
}
export default Index;
