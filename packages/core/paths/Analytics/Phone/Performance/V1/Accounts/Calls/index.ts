import Aggregate from './Aggregate';
import Timeline from './Timeline';
import Parent from '..';
import { RingCentral } from '../../../../../../..';

class Index {
  rc: RingCentral;

  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/calls`;
  }

  timeline(): Timeline {
    return new Timeline(this);
  }

  aggregate(): Aggregate {
    return new Aggregate(this);
  }
}
export default Index;
