import V1 from './V1';
import { RingCentralInterface, ParentInterface } from '../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/audio`;
  }

  v1(): V1 {
    return new V1(this);
  }
}
export default Index;
