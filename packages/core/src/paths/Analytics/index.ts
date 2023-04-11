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

  calls(): Calls {
    return new Calls(this);
  }
}
export default Index;
