import Replace from './Replace';
import { RingCentralInterface, ParentInterface } from '../../../../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public deviceId: string | null;

  public constructor(_parent: ParentInterface, deviceId: string | null = null) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.deviceId = deviceId;
  }

  public path(withParameter = true): string {
    if (withParameter && this.deviceId !== null) {
      return `${this._parent.path()}/devices/${this.deviceId}`;
    }
    return `${this._parent.path()}/devices`;
  }

  public replace(): Replace {
    return new Replace(this);
  }
}
export default Index;
