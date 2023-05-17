import Calls from './Calls';
import { RingCentralInterface } from '../../types';

class Index {
  public rc: RingCentralInterface;

  public constructor(rc: RingCentralInterface) {
    this.rc = rc;
  }

  public path(withParameter = false): string {
    return '/analytics';
  }

  public calls(): Calls {
    return new Calls(this);
  }
}
export default Index;
