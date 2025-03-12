import Insights from "./Insights/index.js";
import {
  ParentInterface,
  RingCentralInterface,
} from "../../../../../../../../types.js";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;
  public sourceSessionId: string | null;

  public constructor(
    _parent: ParentInterface,
    sourceSessionId: string | null = null,
  ) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.sourceSessionId = sourceSessionId;
  }
  public path(withParameter = true): string {
    if (withParameter && this.sourceSessionId !== null) {
      return `${this._parent.path()}/sessions/${this.sourceSessionId}`;
    }
    return `${this._parent.path()}/sessions`;
  }

  public insights(): Insights {
    return new Insights(this);
  }
}
export default Index;
