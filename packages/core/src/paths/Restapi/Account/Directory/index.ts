import DeviceTypes from './DeviceTypes';
import Federation from './Federation';
import Entries from './Entries';
import Devices from './Devices';
import { RingCentralInterface, ParentInterface } from '../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/directory`;
  }

  devices(): Devices {
    return new Devices(this);
  }

  entries(entryId: (string | null) = null): Entries {
    return new Entries(this, entryId);
  }

  federation(): Federation {
    return new Federation(this);
  }

  deviceTypes(): DeviceTypes {
    return new DeviceTypes(this);
  }
}
export default Index;
