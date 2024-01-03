import Conference from './Conference';
import CallOut from './CallOut';
import Sessions from './Sessions';
import type { RingCentralInterface, ParentInterface } from '../../../../types';

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/telephony`;
  }

  public sessions(telephonySessionId: string | null = null): Sessions {
    return new Sessions(this, telephonySessionId);
  }

  public callOut(): CallOut {
    return new CallOut(this);
  }

  public conference(): Conference {
    return new Conference(this);
  }
}
export default Index;
