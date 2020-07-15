import {RestRequestConfig} from '../../../../../Rest';
import {UserCallQueues} from '../../../../../definitions';
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
    return `${this.parent.path()}/call-queues`;
  }

  /**
   * Operation: Update User Call Queues
   * Rate Limit Group: Medium
   * Http put /restapi/v1.0/account/{accountId}/extension/{extensionId}/call-queues
   */
  async put(
    userCallQueues: UserCallQueues,
    config?: RestRequestConfig
  ): Promise<UserCallQueues> {
    const r = await this.rc.put<UserCallQueues>(
      this.path(),
      userCallQueues,
      undefined,
      config
    );
    return r.data;
  }
}

export default Index;
