import Recordings from './Recordings';
import Sessions from './Sessions';
import Webinars from './Webinars';
import Company from './Company';
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

  company(): Company {
    return new Company(this);
  }

  webinars(webinarId: (string | null) = null): Webinars {
    return new Webinars(this, webinarId);
  }

  sessions(): Sessions {
    return new Sessions(this);
  }

  recordings(recordingId: (string | null) = null): Recordings {
    return new Recordings(this, recordingId);
  }
}
export default Index;
