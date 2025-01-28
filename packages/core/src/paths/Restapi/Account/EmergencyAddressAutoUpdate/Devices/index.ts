import BulkAssign from "./BulkAssign/index";
import ListDevicesAutomaticLocationUpdates from "../../../../../definitions/ListDevicesAutomaticLocationUpdates";
import ListDevicesAutomaticLocationUpdatesParameters from "../../../../../definitions/ListDevicesAutomaticLocationUpdatesParameters";
import {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../../types";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/devices`;
  }
  /**
   * Returns a list of common devices with their status of Automatic
   * Location Updates feature.
   *
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/devices
   * Rate Limit Group: Medium
   * App Permission: EditAccounts
   * User Permission: ConfigureEmergencyMaps
   */
  public async get(
    queryParams?: ListDevicesAutomaticLocationUpdatesParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<ListDevicesAutomaticLocationUpdates> {
    const r = await this.rc.get<ListDevicesAutomaticLocationUpdates>(
      this.path(),
      queryParams,
      restRequestConfig,
    );
    return r.data;
  }

  public bulkAssign(): BulkAssign {
    return new BulkAssign(this);
  }
}
export default Index;
