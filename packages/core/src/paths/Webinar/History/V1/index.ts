import Recordings from "./Recordings/index";
import Sessions from "./Sessions/index";
import Webinars from "./Webinars/index";
import Company from "./Company/index";
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

  public company(): Company {
    return new Company(this);
  }

  public webinars(webinarId: string | null = null): Webinars {
    return new Webinars(this, webinarId);
  }

  public sessions(): Sessions {
    return new Sessions(this);
  }

  public recordings(recordingId: string | null = null): Recordings {
    return new Recordings(this, recordingId);
  }
}
export default Index;
