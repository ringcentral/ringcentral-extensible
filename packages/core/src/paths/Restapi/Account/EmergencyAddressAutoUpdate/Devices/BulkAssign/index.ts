import type AssignMultipleDevicesAutomaticLocationUpdates from "../../../../../../definitions/AssignMultipleDevicesAutomaticLocationUpdates";
import type {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../../../types";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/bulk-assign`;
  }
  /**
   * Enables or disables Automatic Location Updates feature for the
   * specified common phones.
   *
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/devices/bulk-assign
   * Rate Limit Group: Heavy
   * App Permission: EditAccounts
   * User Permission: ConfigureEmergencyMaps
   */
  public async post(
    assignMultipleDevicesAutomaticLocationUpdates:
      AssignMultipleDevicesAutomaticLocationUpdates,
    restRequestConfig?: RestRequestConfig,
  ): Promise<string> {
    const r = await this.rc.post<string>(
      this.path(),
      assignMultipleDevicesAutomaticLocationUpdates,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
