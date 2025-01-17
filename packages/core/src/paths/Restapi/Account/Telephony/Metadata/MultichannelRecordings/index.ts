import Content from './Content';
import type { RingCentralInterface, ParentInterface } from '../../../../../../types';

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;
  public metadataId: string | null;

  public constructor(_parent: ParentInterface, metadataId: string | null = null) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.metadataId = metadataId;
  }
  public path(withParameter = true): string {
    if (withParameter && this.metadataId !== null) {
      return `${this._parent.path()}/multichannel-recordings/${this.metadataId}`;
    }
    return `${this._parent.path()}/multichannel-recordings`;
  }

  public content(): Content {
    return new Content(this);
  }
}
export default Index;
