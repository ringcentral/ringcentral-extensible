import LockedSettings from './LockedSettings';
import { RingCentralInterface, ParentInterface } from '../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
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
