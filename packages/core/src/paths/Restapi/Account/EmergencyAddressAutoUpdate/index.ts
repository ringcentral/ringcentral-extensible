import WirelessPointsBulkValidate from "./WirelessPointsBulkValidate/index";
import WirelessPointsBulkUpdate from "./WirelessPointsBulkUpdate/index";
import WirelessPointsBulkCreate from "./WirelessPointsBulkCreate/index";
import SwitchesBulkValidate from "./SwitchesBulkValidate/index";
import SwitchesBulkUpdate from "./SwitchesBulkUpdate/index";
import SwitchesBulkCreate from "./SwitchesBulkCreate/index";
import WirelessPoints from "./WirelessPoints/index";
import Switches from "./Switches/index";
import Networks from "./Networks/index";
import Devices from "./Devices/index";
import Users from "./Users/index";
import Tasks from "./Tasks/index";
import { ParentInterface, RingCentralInterface } from "../../../../types";

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

  public tasks(taskId: string | null = null): Tasks {
    return new Tasks(this, taskId);
  }

  public users(): Users {
    return new Users(this);
  }

  public devices(): Devices {
    return new Devices(this);
  }

  public networks(networkId: string | null = null): Networks {
    return new Networks(this, networkId);
  }

  public switches(switchId: string | null = null): Switches {
    return new Switches(this, switchId);
  }

  public wirelessPoints(pointId: string | null = null): WirelessPoints {
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
