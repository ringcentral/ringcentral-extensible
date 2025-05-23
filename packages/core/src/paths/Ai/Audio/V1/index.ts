import Enrollments from "./Enrollments/index.js";
import Async from "./Async/index.js";
import { ParentInterface, RingCentralInterface } from "../../../../types.js";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path(false)}/v1`;
  }

  public async(): Async {
    return new Async(this);
  }

  public enrollments(speakerId: string | null = null): Enrollments {
    return new Enrollments(this, speakerId);
  }
}
export default Index;
