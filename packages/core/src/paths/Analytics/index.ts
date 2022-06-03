import Phone from './Phone';
import { RingCentralInterface } from '../../types';

class Index {
  rc: RingCentralInterface;

  constructor(rc: RingCentralInterface) {
    this.rc = rc;
  }

  path(): string {
    return '/analytics';
  }

  phone(): Phone {
    return new Phone(this);
  }
}
export default Index;
