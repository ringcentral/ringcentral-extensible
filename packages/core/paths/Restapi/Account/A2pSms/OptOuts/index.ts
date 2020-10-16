import {RestRequestConfig} from '../../../../../Rest';
import {
  OptOutListResponse,
  ReadA2PsmsOptOutsParameters,
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
    return `${this.parent.path()}/opt-outs`;
  }

  /**
   * Operation: Get Opted Out Numbers
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/account/{accountId}/a2p-sms/opt-outs
   */
  async get(
    queryParams?: ReadA2PsmsOptOutsParameters,
    config?: RestRequestConfig
  ): Promise<OptOutListResponse> {
    const r = await this.rc.get<OptOutListResponse>(
      this.path(),
      queryParams,
      config
    );
    return r.data;
  }
}

export default Index;
