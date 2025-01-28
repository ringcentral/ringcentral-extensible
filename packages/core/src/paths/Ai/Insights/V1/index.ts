import Async from "./Async/index";
import { ParentInterface, RingCentralInterface } from "../../../../types";

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
}
export default Index;
