import Authorize from './Authorize';
import Revoke from './Revoke';
import Token from './Token';
import { RingCentralInterface, ParentInterface } from '../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/oauth`;
  }

  token(): Token {
    return new Token(this);
  }

  revoke(): Revoke {
    return new Revoke(this);
  }

  authorize(): Authorize {
    return new Authorize(this);
  }
}
export default Index;
