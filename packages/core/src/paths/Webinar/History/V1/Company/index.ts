import Recordings from './Recordings';
import Sessions from './Sessions';
import { RingCentralInterface, ParentInterface } from '../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/company`;
  }

  sessions(): Sessions {
    return new Sessions(this);
  }

  recordings(recordingId: (string | null) = null): Recordings {
    return new Recordings(this, recordingId);
  }
}
export default Index;
