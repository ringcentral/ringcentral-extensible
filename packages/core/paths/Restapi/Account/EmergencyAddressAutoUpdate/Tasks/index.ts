import {RestRequestConfig} from '../../../../../Rest';
import {AutomaticLocationUpdatesTaskInfo} from '../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../..';

class Index {
  rc: RingCentral;
  parent: Parent;
  taskId: string | null;

  constructor(parent: Parent, taskId: string | null = null) {
    this.parent = parent;
    this.rc = parent.rc;
    this.taskId = taskId;
  }
  path(withParameter = true): string {
    if (withParameter && this.taskId !== null) {
      return `${this.parent.path()}/tasks/${this.taskId}`;
    }
    return `${this.parent.path()}/tasks`;
  }
  /**
   * Returns results of the task created within the frame of Automatic Location Updates feature. Currently four task types are supported: 'Wireless Points Bulk Create', 'Wireless Points Bulk Update', 'Switches Bulk Create', 'Switches Bulk Update'.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/tasks/{taskId}
   * Rate Limit Group: Light
   * App Permission: EditAccounts
   * User Permission: ConfigureEmergencyMaps
   */
  async get(
    restRequestConfig?: RestRequestConfig
  ): Promise<AutomaticLocationUpdatesTaskInfo> {
    if (this.taskId === null) {
      throw new Error('taskId must be specified.');
    }
    const r = await this.rc.get<AutomaticLocationUpdatesTaskInfo>(
      this.path(),
      undefined,
      restRequestConfig
    );
    return r.data;
  }
}
export default Index;
