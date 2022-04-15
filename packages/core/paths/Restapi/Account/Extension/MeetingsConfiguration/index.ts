import Assistants from './Assistants';
import Assisted from './Assisted';
import Parent from '..';
import { RingCentral } from '../../../../..';

class Index {
  rc: RingCentral;

  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/meetings-configuration`;
  }

  assisted(): Assisted {
    return new Assisted(this);
  }

  assistants(): Assistants {
    return new Assistants(this);
  }
}
export default Index;
