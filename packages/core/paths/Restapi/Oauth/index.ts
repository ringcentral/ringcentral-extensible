import Authorize from './Authorize';
import Revoke from './Revoke';
import Token from './Token';
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
