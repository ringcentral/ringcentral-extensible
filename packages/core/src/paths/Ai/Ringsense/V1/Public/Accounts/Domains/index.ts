import Records from "./Records/index";
import {
  ParentInterface,
  RingCentralInterface,
} from "../../../../../../../types";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;
  public domain: string | null;

  public constructor(_parent: ParentInterface, domain: string | null = null) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.domain = domain;
  }
  public path(withParameter = true): string {
    if (withParameter && this.domain !== null) {
      return `${this._parent.path()}/domains/${this.domain}`;
    }
    return `${this._parent.path()}/domains`;
  }

  public records(sourceRecordId: string | null = null): Records {
    return new Records(this, sourceRecordId);
  }
}
export default Index;
