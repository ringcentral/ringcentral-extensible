import {RestRequestConfig} from '../../../../../Rest';
import {
  ReadA2PSMSOptOutsParameters,
  OptOutListResponse,
} from '../../../../../definitions';
import Parent from '..';
import {RingCentral} from '../../../../..';

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
   * Returns the list of numbers opted out from the account. The list can be filtered by `to`/`from` phone number query parameters. Specifying `text/csv` in the Accept header downloads the data in CSV format.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/a2p-sms/opt-outs
   * Rate Limit Group: Light
   * App Permission: A2PSMS
   */
  async get(
    queryParams?: ReadA2PSMSOptOutsParameters,
    restRequestConfig?: RestRequestConfig
  ): Promise<OptOutListResponse> {
    const r = await this.rc.get<OptOutListResponse>(
      this.path(),
      queryParams,
      restRequestConfig
    );
    return r.data;
  }
}
export default Index;
