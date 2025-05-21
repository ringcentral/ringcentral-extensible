import ForwardingTargets from "./ForwardingTargets/index.js";
import InteractionRules from "./InteractionRules/index.js";
import StateRules from "./StateRules/index.js";
import {
  ParentInterface,
  RingCentralInterface,
} from "../../../../../../../types.js";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path(false)}/voice`;
  }

  public stateRules(stateId: string | null = null): StateRules {
    return new StateRules(this, stateId);
  }

  public interactionRules(ruleId: string | null = null): InteractionRules {
    return new InteractionRules(this, ruleId);
  }

  public forwardingTargets(): ForwardingTargets {
    return new ForwardingTargets(this);
  }
}
export default Index;
