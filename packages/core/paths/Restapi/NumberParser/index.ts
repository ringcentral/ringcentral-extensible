import Parse from './Parse';
import Parent from '..';
import { RingCentral } from '../../..';

class Index {
  rc: RingCentral;

  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/number-parser`;
  }

  parse(): Parse {
    return new Parse(this);
  }
}
export default Index;
