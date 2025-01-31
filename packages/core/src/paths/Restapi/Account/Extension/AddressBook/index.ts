import Contact from "./Contact/index.js";
import { ParentInterface, RingCentralInterface } from "../../../../../types.js";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/address-book`;
  }

  public contact(contactId: string | null = null): Contact {
    return new Contact(this, contactId);
  }
}
export default Index;
