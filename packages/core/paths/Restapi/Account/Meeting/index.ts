import LockedSettings from './LockedSettings';
import Parent from '..';
import { RingCentral } from '../../../..';

class Index {
  rc: RingCentral;

  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/meeting`;
  }

  lockedSettings(): LockedSettings {
    return new LockedSettings(this);
  }
}
export default Index;
