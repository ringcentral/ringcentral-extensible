import V1 from './V1';
import { RingCentralInterface } from '../../types';

class Index {
  rc: RingCentralInterface;

  constructor(rc: RingCentralInterface) {
    this.rc = rc;
  }

  path(): string {
    return '/team-messaging';
  }

  v1(): V1 {
    return new V1(this);
  }
}
export default Index;
