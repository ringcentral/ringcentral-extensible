import Configuration from './Configuration';
import Notifications from './Notifications';
import Registration from './Registration';
import History from './History';
import { RingCentralInterface } from '../../types';

class Index {
  rc: RingCentralInterface;

  constructor(rc: RingCentralInterface) {
    this.rc = rc;
  }

  path(): string {
    return '/webinar';
  }

  history(): History {
    return new History(this);
  }

  registration(): Registration {
    return new Registration(this);
  }

  notifications(): Notifications {
    return new Notifications(this);
  }

  configuration(): Configuration {
    return new Configuration(this);
  }
}
export default Index;
