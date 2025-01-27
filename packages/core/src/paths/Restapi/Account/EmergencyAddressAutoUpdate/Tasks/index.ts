import AutomaticLocationUpdatesTaskInfo from "../../../../../definitions/AutomaticLocationUpdatesTaskInfo.js";
import {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../../types.js";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;
  public taskId: string | null;

  public constructor(_parent: ParentInterface, taskId: string | null = null) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.taskId = taskId;
  }
  public path(withParameter = true): string {
    if (withParameter && this.taskId !== null) {
      return `${this._parent.path()}/tasks/${this.taskId}`;
    }
    return `${this._parent.path()}/tasks`;
  }
  /**
   * Returns results of the task created within the frame of Automatic
   * Location Updates feature. Currently four task types are supported: 'Wireless
   * Points Bulk Create', 'Wireless Points Bulk Update', 'Switches Bulk Create',
   * 'Switches Bulk Update'.
   *
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/tasks/{taskId}
   * Rate Limit Group: Light
   * App Permission: EditAccounts
   * User Permission: ConfigureEmergencyMaps
   */
  public async get(
    restRequestConfig?: RestRequestConfig,
  ): Promise<AutomaticLocationUpdatesTaskInfo> {
    if (this.taskId === null) {
      throw new Error("taskId must be specified.");
    }
    const r = await this.rc.get<AutomaticLocationUpdatesTaskInfo>(
      this.path(),
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
