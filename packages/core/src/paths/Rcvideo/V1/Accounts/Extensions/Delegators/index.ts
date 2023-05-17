import DelegatorsListResult from '../../../../../../definitions/DelegatorsListResult';
import RcvListDelegatorsParameters from '../../../../../../definitions/RcvListDelegatorsParameters';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }

  public path(withParameter = false): string {
    return `${this._parent.path()}/delegators`;
  }

  /**
   * Returns the list of users who can delegate bridge/meeting creation to the given user.
   * HTTP Method: get
   * Endpoint: /rcvideo/v1/accounts/{accountId}/extensions/{extensionId}/delegators
   * Rate Limit Group: Medium
   * App Permission: Video
   */
  public async get(queryParams?: RcvListDelegatorsParameters, restRequestConfig?: RestRequestConfig): Promise<DelegatorsListResult> {
    const r = await this.rc.get<DelegatorsListResult>(this.path(), queryParams, restRequestConfig);
    return r.data;
  }
}
export default Index;
