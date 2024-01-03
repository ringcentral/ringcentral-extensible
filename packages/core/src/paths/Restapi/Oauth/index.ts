import Authorize from './Authorize';
import Revoke from './Revoke';
import Token from './Token';
import type { RingCentralInterface, ParentInterface } from '../../../types';

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path(false)}/oauth`;
  }

  public token(): Token {
    return new Token(this);
  }

  public revoke(): Revoke {
    return new Revoke(this);
  }

  public authorize(): Authorize {
    return new Authorize(this);
  }
}
export default Index;
