import Meetings from './Meetings';
import { RingCentralInterface, ParentInterface } from '../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/history`;
  }

  meetings(meetingId: (string | null) = null): Meetings {
    return new Meetings(this, meetingId);
  }
}
export default Index;
