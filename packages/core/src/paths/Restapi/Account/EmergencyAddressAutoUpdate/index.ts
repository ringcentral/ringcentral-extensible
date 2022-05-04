import WirelessPointsBulkValidate from './WirelessPointsBulkValidate';
import WirelessPointsBulkUpdate from './WirelessPointsBulkUpdate';
import WirelessPointsBulkCreate from './WirelessPointsBulkCreate';
import SwitchesBulkValidate from './SwitchesBulkValidate';
import SwitchesBulkUpdate from './SwitchesBulkUpdate';
import SwitchesBulkCreate from './SwitchesBulkCreate';
import WirelessPoints from './WirelessPoints';
import Switches from './Switches';
import Networks from './Networks';
import Devices from './Devices';
import Users from './Users';
import Tasks from './Tasks';
import Parent from '..';
import RingCentral from '../../../..';

class Index {
  rc: RingCentral;

  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/emergency-address-auto-update`;
  }

  tasks(taskId: (string | null) = null): Tasks {
    return new Tasks(this, taskId);
  }

  users(): Users {
    return new Users(this);
  }

  devices(): Devices {
    return new Devices(this);
  }

  networks(networkId: (string | null) = null): Networks {
    return new Networks(this, networkId);
  }

  switches(switchId: (string | null) = null): Switches {
    return new Switches(this, switchId);
  }

  wirelessPoints(pointId: (string | null) = null): WirelessPoints {
    return new WirelessPoints(this, pointId);
  }

  switchesBulkCreate(): SwitchesBulkCreate {
    return new SwitchesBulkCreate(this);
  }

  switchesBulkUpdate(): SwitchesBulkUpdate {
    return new SwitchesBulkUpdate(this);
  }

  switchesBulkValidate(): SwitchesBulkValidate {
    return new SwitchesBulkValidate(this);
  }

  wirelessPointsBulkCreate(): WirelessPointsBulkCreate {
    return new WirelessPointsBulkCreate(this);
  }

  wirelessPointsBulkUpdate(): WirelessPointsBulkUpdate {
    return new WirelessPointsBulkUpdate(this);
  }

  wirelessPointsBulkValidate(): WirelessPointsBulkValidate {
    return new WirelessPointsBulkValidate(this);
  }
}
export default Index;
