import Sessions from './Sessions';
import Webinars from './Webinars';
import Company from './Company';
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

  public company(): Company {
    return new Company(this);
  }

  public webinars(webinarId: (string | null) = null): Webinars {
    return new Webinars(this, webinarId);
  }

  public sessions(): Sessions {
    return new Sessions(this);
  }
}
export default Index;
