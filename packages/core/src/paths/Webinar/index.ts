import Configuration from './Configuration';
import Notifications from './Notifications';
import Registration from './Registration';
import History from './History';
import { RingCentralInterface } from '../../types';

class Index {
  public rc: RingCentralInterface;

  public constructor(rc: RingCentralInterface) {
    this.rc = rc;
  }

  public path(): string {
    return '/webinar';
  }

  public history(): History {
    return new History(this);
  }

  public registration(): Registration {
    return new Registration(this);
  }

  public notifications(): Notifications {
    return new Notifications(this);
  }

  public configuration(): Configuration {
    return new Configuration(this);
  }
}
export default Index;
