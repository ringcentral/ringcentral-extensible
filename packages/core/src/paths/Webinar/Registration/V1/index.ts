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
    return `${this._parent.path(false)}/v1`;
  }

  public sessions(sessionId: string | null = null): Sessions {
    return new Sessions(this, sessionId);
  }
}
export default Index;
