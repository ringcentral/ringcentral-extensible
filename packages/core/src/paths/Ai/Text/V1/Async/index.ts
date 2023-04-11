import Punctuate from './Punctuate';
import Summarize from './Summarize';
import { RingCentralInterface, ParentInterface } from '../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/async`;
  }

  summarize(): Summarize {
    return new Summarize(this);
  }

  punctuate(): Punctuate {
    return new Punctuate(this);
  }
}
export default Index;
