import Conference from './Conference';
import CallOut from './CallOut';
import Sessions from './Sessions';
import Parent from '..';
import {RingCentral} from '../../../..';

class Index {
  rc: RingCentral;
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }
  path(): string {
    return `${this.parent.path()}/telephony`;
  }

  sessions(telephonySessionId: string | null = null): Sessions {
    return new Sessions(this, telephonySessionId);
  }

  callOut(): CallOut {
    return new CallOut(this);
  }

  conference(): Conference {
    return new Conference(this);
  }
}
export default Index;
