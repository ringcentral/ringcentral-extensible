import Fetch from './Fetch';
import { RingCentralInterface, ParentInterface } from '../../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/timeline`;
  }

  fetch(): Fetch {
    return new Fetch(this);
  }
}
export default Index;
