import Sessions from './Sessions';
import Webinars from './Webinars';
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

  webinars(webinarId: (string | null) = null): Webinars {
    return new Webinars(this, webinarId);
  }

  sessions(): Sessions {
    return new Sessions(this);
  }
}
export default Index;
