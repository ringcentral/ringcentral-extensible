import BulkAssign from "./BulkAssign/index";
import AutomaticLocationUpdatesUserList from "../../../../../definitions/AutomaticLocationUpdatesUserList";
import ListAutomaticLocationUpdatesUsersParameters from "../../../../../definitions/ListAutomaticLocationUpdatesUsersParameters";
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
    return `${this._parent.path()}/users`;
  }
  /**
   * Returns a list of users with their status of Automatic Location
   * Updates feature.
   *
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/users
   * Rate Limit Group: Medium
   * App Permission: EditAccounts
   * User Permission: ConfigureEmergencyMaps
   */
  public async get(
    queryParams?: ListAutomaticLocationUpdatesUsersParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<AutomaticLocationUpdatesUserList> {
    const r = await this.rc.get<AutomaticLocationUpdatesUserList>(
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
