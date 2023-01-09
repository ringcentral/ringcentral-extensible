import Calls from './Calls';
import { RingCentralInterface } from '../../types';

class Index {
  rc: RingCentralInterface;

  constructor(rc: RingCentralInterface) {
    this.rc = rc;
  }

  path(): string {
    return '/analytics';
  }

  calls(version: (string | null) = 'v1'): Calls {
    return new Calls(this, version);
  }
}
export default Index;
