import Subscriptions from "./Subscriptions/index.js";
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

  public subscriptions(subscriptionId: string | null = null): Subscriptions {
    return new Subscriptions(this, subscriptionId);
  }
}
export default Index;
