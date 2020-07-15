import Token from './Token';
import Revoke from './Revoke';
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
    return `${this.parent.path()}/oauth`;
  }

  revoke(): Revoke {
    return new Revoke(this);
  }

  token(): Token {
    return new Token(this);
  }
}

export default Index;
