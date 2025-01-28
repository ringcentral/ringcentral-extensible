import CallQueueMembers from "../../../../../definitions/CallQueueMembers";
import ListCallQueueMembersParameters from "../../../../../definitions/ListCallQueueMembersParameters";
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
    return `${this._parent.path()}/members`;
  }
  /**
   * Returns a list of call queue group members.
   *
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/call-queues/{groupId}/members
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   * User Permission: ReadExtensions
   */
  public async get(
    queryParams?: ListCallQueueMembersParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<CallQueueMembers> {
    const r = await this.rc.get<CallQueueMembers>(
      this.path(),
      queryParams,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
