import Recordings from './Recordings';
import { RingCentralInterface, ParentInterface } from '../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  extensionId: string | null;

  constructor(parent: ParentInterface, extensionId: string | null = null) {
    this.parent = parent;
    this.rc = parent.rc;
    this.extensionId = extensionId;
  }

  path(withParameter = true): string {
    if (withParameter && this.extensionId !== null) {
      return `${this.parent.path()}/extension/${this.extensionId}`;
    }
    return `${this.parent.path()}/extension`;
  }

  recordings(recordingId: (string | null) = null): Recordings {
    return new Recordings(this, recordingId);
  }
}
export default Index;
