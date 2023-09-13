import Meetings from './Meetings';
import { RingCentralInterface, ParentInterface } from '../../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }

  public path(): string {
    return `${this._parent.path(false)}/history`;
  }

  public meetings(meetingId: (string | null) = null): Meetings {
    return new Meetings(this, meetingId);
  }
}
export default Index;
