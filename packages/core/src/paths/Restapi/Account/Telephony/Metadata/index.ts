import MultichannelRecordings from "./MultichannelRecordings/index";
import { ParentInterface, RingCentralInterface } from "../../../../../types";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path(false)}/metadata`;
  }

  public multichannelRecordings(
    metadataId: string | null = null,
  ): MultichannelRecordings {
    return new MultichannelRecordings(this, metadataId);
  }
}
export default Index;
