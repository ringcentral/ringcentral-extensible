import {RestRequestConfig} from '../../../../../../Rest';
import {AssistantsResource} from '../../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../../..';

class Index {
  rc: RingCentral;
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/assistants`;
  }

  /**
   * Operation: Get Assistants
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/meetings-configuration/assistants
   */
  async get(config?: RestRequestConfig): Promise<AssistantsResource> {
    const r = await this.rc.get<AssistantsResource>(
      this.path(),
      undefined,
      config
    );
    return r.data;
  }
}

export default Index;
