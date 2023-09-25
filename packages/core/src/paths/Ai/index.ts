import Insights from './Insights';
import Status from './Status';
import Audio from './Audio';
import Text from './Text';
import type { RingCentralInterface } from '../../types';

class Index {
  public rc: RingCentralInterface;

  public constructor(rc: RingCentralInterface) {
    this.rc = rc;
  }

  public path(): string {
    return '/ai';
  }

  public text(): Text {
    return new Text(this);
  }

  public audio(): Audio {
    return new Audio(this);
  }

  public status(): Status {
    return new Status(this);
  }

  public insights(): Insights {
    return new Insights(this);
  }
}
export default Index;
