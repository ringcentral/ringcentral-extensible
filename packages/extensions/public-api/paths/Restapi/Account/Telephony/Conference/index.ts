import {RestRequestConfig} from '../../../../../Rest';
import {CallSessionObject} from '../../../../../definitions';
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
    return `${this.parent.path()}/conference`;
  }

  /**
   * Initiates a conference call session.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/telephony/conference
   * Rate Limit Group: Heavy
   * App Permission: CallControl
   */
  async post(
    restRequestConfig?: RestRequestConfig
  ): Promise<CallSessionObject> {
    const r = await this.rc.post<CallSessionObject>(
      this.path(),
      undefined,
      restRequestConfig
    );
    return r.data;
  }
}

export default Index;
