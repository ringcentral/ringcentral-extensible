import Phone from './Phone';
import { RingCentral } from '../..';

class Index {
  rc: RingCentral;

  constructor(rc: RingCentral) {
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
