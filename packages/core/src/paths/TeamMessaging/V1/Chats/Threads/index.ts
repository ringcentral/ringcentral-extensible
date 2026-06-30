import type {
  ParentInterface,
  RingCentralInterface,
} from "../../../../../types.js";
import Posts from "./Posts/index.js";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;
  public threadId: string | null;

  public constructor(_parent: ParentInterface, threadId: string | null = null) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.threadId = threadId;
  }
  public path(withParameter = true): string {
    if (withParameter && this.threadId !== null) {
      return `${this._parent.path()}/threads/${this.threadId}`;
    }
    return `${this._parent.path()}/threads`;
  }

  public posts(): Posts {
    return new Posts(this);
  }
}
export default Index;
