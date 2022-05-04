import SipProvision from './SipProvision';
import Parent from '..';
import RingCentral from '../../..';

class Index {
  rc: RingCentral;

  parent: Parent;

  constructor(parent: Parent) {
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
