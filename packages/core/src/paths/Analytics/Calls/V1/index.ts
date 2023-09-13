import Accounts from './Accounts';
import { RingCentralInterface, ParentInterface } from '../../../../types';

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

  public accounts(accountId: (string | null) = null): Accounts {
    return new Accounts(this, accountId);
  }
}
export default Index;
