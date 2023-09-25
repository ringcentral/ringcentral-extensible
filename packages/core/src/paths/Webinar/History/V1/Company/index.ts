import Recordings from './Recordings';
import Sessions from './Sessions';
import type { RingCentralInterface, ParentInterface } from '../../../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }

  public path(): string {
    return `${this._parent.path(false)}/company`;
  }

  public sessions(): Sessions {
    return new Sessions(this);
  }

  public recordings(recordingId: string | null = null): Recordings {
    return new Recordings(this, recordingId);
  }
}
export default Index;
