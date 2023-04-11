import Enrollments from './Enrollments';
import Async from './Async';
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

  async(): Async {
    return new Async(this);
  }

  enrollments(enrollmentId: (string | null) = null): Enrollments {
    return new Enrollments(this, enrollmentId);
  }
}
export default Index;
