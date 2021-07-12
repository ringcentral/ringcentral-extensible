import {RestRequestConfig} from '../../../../../Rest';
import {
  ListCallQueueMembersParameters,
  CallQueueMembers,
} from '../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../..';

class Index {
  rc: RingCentral;
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }
  path(): string {
    return `${this.parent.path()}/members`;
  }
  /**
   * Returns call queue group members.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/call-queues/{groupId}/members
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   * User Permission: ReadExtensions
   */
  async get(
    queryParams?: ListCallQueueMembersParameters,
    restRequestConfig?: RestRequestConfig
  ): Promise<CallQueueMembers> {
    const r = await this.rc.get<CallQueueMembers>(
      this.path(),
      queryParams,
      restRequestConfig
    );
    return r.data;
  }
}
export default Index;
