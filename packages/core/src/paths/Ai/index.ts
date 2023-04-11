import Insights from './Insights';
import Status from './Status';
import Audio from './Audio';
import Text from './Text';
import { RingCentralInterface } from '../../types';

class Index {
  rc: RingCentralInterface;

  constructor(rc: RingCentralInterface) {
    this.rc = rc;
  }

  path(): string {
    return '/ai';
  }

  text(): Text {
    return new Text(this);
  }

  audio(): Audio {
    return new Audio(this);
  }

  status(): Status {
    return new Status(this);
  }

  insights(): Insights {
    return new Insights(this);
  }
}
export default Index;
