import Performance from './Performance';
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
    return `${this.parent.path()}/phone`;
  }

  performance(): Performance {
    return new Performance(this);
  }
}
export default Index;
