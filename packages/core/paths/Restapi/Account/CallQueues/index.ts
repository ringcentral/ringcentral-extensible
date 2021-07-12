import BulkAssign from './BulkAssign';
import Presence from './Presence';
import Members from './Members';
import {RestRequestConfig} from '../../../../Rest';
import {
  ListCallQueuesParameters,
  CallQueues,
  CallQueueDetails,
  CallQueueUpdateDetails,
} from '../../../../definitions';
import Parent from '..';
import RingCentral from '../../../..';

class Index {
  rc: RingCentral;
  parent: Parent;
  groupId: string | null;

  constructor(parent: Parent, groupId: string | null = null) {
    this.parent = parent;
    this.rc = parent.rc;
    this.groupId = groupId;
  }
  path(withParameter = true): string {
    if (withParameter && this.groupId !== null) {
      return `${this.parent.path()}/call-queues/${this.groupId}`;
    }
    return `${this.parent.path()}/call-queues`;
  }
  /**
   * Returns call queue group list.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/call-queues
   * Rate Limit Group: Medium
   * App Permission: ReadAccounts
   * User Permission: ReadExtensions
   */
  async list(
    queryParams?: ListCallQueuesParameters,
    restRequestConfig?: RestRequestConfig
  ): Promise<CallQueues> {
    const r = await this.rc.get<CallQueues>(
      this.path(false),
      queryParams,
      restRequestConfig
    );
    return r.data;
  }

  /**
   * Returns basic information on a call queue group extension.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/call-queues/{groupId}
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   * User Permission: ReadExtensions
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<CallQueueDetails> {
    if (this.groupId === null) {
      throw new Error('groupId must be specified.');
    }
    const r = await this.rc.get<CallQueueDetails>(
      this.path(),
      undefined,
      restRequestConfig
    );
    return r.data;
  }

  /**
   * Updates information on a call queue group extension.
   * HTTP Method: put
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/call-queues/{groupId}
   * Rate Limit Group: Light
   * App Permission: EditExtensions
   * User Permission: EditUserInfo
   */
  async put(
    callQueueUpdateDetails: CallQueueUpdateDetails,
    restRequestConfig?: RestRequestConfig
  ): Promise<CallQueueDetails> {
    if (this.groupId === null) {
      throw new Error('groupId must be specified.');
    }
    const r = await this.rc.put<CallQueueDetails>(
      this.path(),
      callQueueUpdateDetails,
      undefined,
      restRequestConfig
    );
    return r.data;
  }

  members(): Members {
    return new Members(this);
  }

  presence(): Presence {
    return new Presence(this);
  }

  bulkAssign(): BulkAssign {
    return new BulkAssign(this);
  }
}
export default Index;
