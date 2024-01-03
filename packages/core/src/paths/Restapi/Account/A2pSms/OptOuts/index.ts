import BulkAssign from './BulkAssign';
import type OptOutListResponse from '../../../../../definitions/OptOutListResponse';
import type ReadA2PSMSOptOutsParameters from '../../../../../definitions/ReadA2PSMSOptOutsParameters';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/opt-outs`;
  }
  /**
   * Returns the list of numbers opted out from the account. The list can be filtered by `to`/`from` phone number query parameters. Specifying `text/csv` in the Accept header downloads the data in CSV format.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/a2p-sms/opt-outs
   * Rate Limit Group: Light
   * App Permission: A2PSMS
   */
  public async get(
    queryParams?: ReadA2PSMSOptOutsParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<OptOutListResponse> {
    const r = await this.rc.get<OptOutListResponse>(this.path(), queryParams, restRequestConfig);
    return r.data;
  }

  public bulkAssign(): BulkAssign {
    return new BulkAssign(this);
  }
}
export default Index;
