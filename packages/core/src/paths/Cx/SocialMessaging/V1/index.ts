import Identities from './Identities';
import Contents from './Contents';
import type { RingCentralInterface, ParentInterface } from '../../../../types';

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

  public contents(contentId: string | null = null): Contents {
    return new Contents(this, contentId);
  }

  public identities(identityId: string | null = null): Identities {
    return new Identities(this, identityId);
  }
}
export default Index;
