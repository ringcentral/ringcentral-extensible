import Tasks from './Tasks'
import SwitchesBulkValidate from './SwitchesBulkValidate'
import WirelessPointsBulkValidate from './WirelessPointsBulkValidate'
import WirelessPointsBulkUpdate from './WirelessPointsBulkUpdate'
import WirelessPointsBulkCreate from './WirelessPointsBulkCreate'
import SwitchesBulkUpdate from './SwitchesBulkUpdate'
import SwitchesBulkCreate from './SwitchesBulkCreate'
import Switches from './Switches'
import Devices from './Devices'
import Networks from './Networks'
import WirelessPoints from './WirelessPoints'
import Users from './Users'
import Parent from '..'
import RestClient from '../../../..'

class EmergencyAddressAutoUpdate {
  rc: RestClient
  parent: Parent

  constructor(parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path(): string {
    return `${this.parent.path()}/emergency-address-auto-update`
  }

  users(): Users {
    return new Users(this)
  }

  wirelessPoints(pointId: string): WirelessPoints {
    return new WirelessPoints(this, pointId)
  }

  networks(networkId: string): Networks {
    return new Networks(this, networkId)
  }

  devices(): Devices {
    return new Devices(this)
  }

  switches(switchId: string): Switches {
    return new Switches(this, switchId)
  }

  switchesBulkCreate(): SwitchesBulkCreate {
    return new SwitchesBulkCreate(this)
  }

  switchesBulkUpdate(): SwitchesBulkUpdate {
    return new SwitchesBulkUpdate(this)
  }

  wirelessPointsBulkCreate(): WirelessPointsBulkCreate {
    return new WirelessPointsBulkCreate(this)
  }

  wirelessPointsBulkUpdate(): WirelessPointsBulkUpdate {
    return new WirelessPointsBulkUpdate(this)
  }

  wirelessPointsBulkValidate(): WirelessPointsBulkValidate {
    return new WirelessPointsBulkValidate(this)
  }

  switchesBulkValidate(): SwitchesBulkValidate {
    return new SwitchesBulkValidate(this)
  }

  tasks(taskId: string): Tasks {
    return new Tasks(this, taskId)
  }
}

export default EmergencyAddressAutoUpdate
