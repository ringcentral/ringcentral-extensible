import Webhooks from './Webhooks';
import Events from './Events';
import type { RingCentralInterface, ParentInterface } from '../../../../types';

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;
  public groupId: string | null;

  public constructor(_parent: ParentInterface, groupId: string | null = null) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.groupId = groupId;
  }
  public path(withParameter = true): string {
    if (withParameter && this.groupId !== null) {
      return `${this._parent.path()}/groups/${this.groupId}`;
    }
    return `${this._parent.path()}/groups`;
  }

  public events(): Events {
    return new Events(this);
  }

  public webhooks(): Webhooks {
    return new Webhooks(this);
  }
}
export default Index;
