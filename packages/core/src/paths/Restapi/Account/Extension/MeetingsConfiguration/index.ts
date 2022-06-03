import Assistants from './Assistants';
import Assisted from './Assisted';
import { RingCentralInterface, ParentInterface } from '../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
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
