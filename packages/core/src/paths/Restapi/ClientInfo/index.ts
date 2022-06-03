import SipProvision from './SipProvision';
import { RingCentralInterface, ParentInterface } from '../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/client-info`;
  }

  sipProvision(): SipProvision {
    return new SipProvision(this);
  }
}
export default Index;
