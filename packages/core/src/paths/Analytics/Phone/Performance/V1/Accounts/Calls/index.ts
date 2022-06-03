import Aggregate from './Aggregate';
import Timeline from './Timeline';
import { RingCentralInterface, ParentInterface } from '../../../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
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
