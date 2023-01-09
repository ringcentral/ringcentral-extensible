import CallQueueMembers from '../../../../../definitions/CallQueueMembers';
import ListCallQueueMembersParameters from '../../../../../definitions/ListCallQueueMembersParameters';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/members`;
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
  async get(queryParams?: ListCallQueueMembersParameters, restRequestConfig?: RestRequestConfig): Promise<CallQueueMembers> {
    const r = await this.rc.get<CallQueueMembers>(this.path(), queryParams, restRequestConfig);
    return r.data;
  }
}
export default Index;
