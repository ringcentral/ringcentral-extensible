import Punctuate from './Punctuate';
import Summarize from './Summarize';
import type { RingCentralInterface, ParentInterface } from '../../../../../types';

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path(false)}/async`;
  }

  public summarize(): Summarize {
    return new Summarize(this);
  }

  public punctuate(): Punctuate {
    return new Punctuate(this);
  }
}
export default Index;
