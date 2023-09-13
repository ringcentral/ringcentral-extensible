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
import { RingCentralInterface, ParentInterface } from '../../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }

  public path(): string {
    return `${this._parent.path()}/emergency-address-auto-update`;
  }

  public tasks(taskId: (string | null) = null): Tasks {
    return new Tasks(this, taskId);
  }

  public users(): Users {
    return new Users(this);
  }

  public devices(): Devices {
    return new Devices(this);
  }

  public networks(networkId: (string | null) = null): Networks {
    return new Networks(this, networkId);
  }

  public switches(switchId: (string | null) = null): Switches {
    return new Switches(this, switchId);
  }

  public wirelessPoints(pointId: (string | null) = null): WirelessPoints {
    return new WirelessPoints(this, pointId);
  }

  public switchesBulkCreate(): SwitchesBulkCreate {
    return new SwitchesBulkCreate(this);
  }

  public switchesBulkUpdate(): SwitchesBulkUpdate {
    return new SwitchesBulkUpdate(this);
  }

  public switchesBulkValidate(): SwitchesBulkValidate {
    return new SwitchesBulkValidate(this);
  }

  public wirelessPointsBulkCreate(): WirelessPointsBulkCreate {
    return new WirelessPointsBulkCreate(this);
  }

  public wirelessPointsBulkUpdate(): WirelessPointsBulkUpdate {
    return new WirelessPointsBulkUpdate(this);
  }

  public wirelessPointsBulkValidate(): WirelessPointsBulkValidate {
    return new WirelessPointsBulkValidate(this);
  }
}
export default Index;
