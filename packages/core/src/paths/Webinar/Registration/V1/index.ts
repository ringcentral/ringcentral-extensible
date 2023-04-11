import Sessions from './Sessions';
import { RingCentralInterface, ParentInterface } from '../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/v1`;
  }

  sessions(sessionId: (string | null) = null): Sessions {
    return new Sessions(this, sessionId);
  }
}
export default Index;
