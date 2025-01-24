import type UserCallQueues from "../../../../../definitions/UserCallQueues";
import type {
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
    return `${this._parent.path()}/call-queues`;
  }
  /**
   * Updates a list of call queues where the user is an agent. This
   * is a full update request, which means that if any call queue where the user is
   * an agent is not mentioned in request, then the user is automatically removed
   * from this queue.
   *
   * HTTP Method: put
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/call-queues
   * Rate Limit Group: Medium
   * App Permission: EditAccounts
   * User Permission: EditCallQueuePresence
   */
  public async put(
    userCallQueues: UserCallQueues,
    restRequestConfig?: RestRequestConfig,
  ): Promise<UserCallQueues> {
    const r = await this.rc.put<UserCallQueues>(
      this.path(),
      userCallQueues,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
