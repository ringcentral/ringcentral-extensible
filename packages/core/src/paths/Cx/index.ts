import SocialMessaging from './SocialMessaging';
import type { RingCentralInterface } from '../../types';

class Index {
  public rc: RingCentralInterface;

  public constructor(rc: RingCentralInterface) {
    this.rc = rc;
  }
  public path(): string {
    return '/cx';
  }

  public socialMessaging(): SocialMessaging {
    return new SocialMessaging(this);
  }
}
export default Index;
