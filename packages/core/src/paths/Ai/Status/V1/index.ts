import Jobs from './Jobs';
import { RingCentralInterface, ParentInterface } from '../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/v1`;
  }

  jobs(jobId: (string | null) = null): Jobs {
    return new Jobs(this, jobId);
  }
}
export default Index;
