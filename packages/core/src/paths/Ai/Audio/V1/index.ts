import Enrollments from './Enrollments';
import Async from './Async';
import { RingCentralInterface, ParentInterface } from '../../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }

  public path(withParameter = false): string {
    return `${this._parent.path(false)}/v1`;
  }

  public async(): Async {
    return new Async(this);
  }

  public enrollments(enrollmentId: (string | null) = null): Enrollments {
    return new Enrollments(this, enrollmentId);
  }
}
export default Index;
