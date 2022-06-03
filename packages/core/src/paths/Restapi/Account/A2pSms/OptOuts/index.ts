import BulkAssign from './BulkAssign';
import OptOutListResponse from '../../../../../definitions/OptOutListResponse';
import ReadA2PSMSOptOutsParameters from '../../../../../definitions/ReadA2PSMSOptOutsParameters';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
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
  async get(queryParams?: ReadA2PSMSOptOutsParameters, restRequestConfig?: RestRequestConfig): Promise<OptOutListResponse> {
    const r = await this.rc.get<OptOutListResponse>(this.path(), queryParams, restRequestConfig);
    return r.data;
  }

  bulkAssign(): BulkAssign {
    return new BulkAssign(this);
  }
}
export default Index;
