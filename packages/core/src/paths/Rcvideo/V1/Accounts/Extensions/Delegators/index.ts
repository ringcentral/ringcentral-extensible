import DelegatorsListResult from '../../../../../../definitions/DelegatorsListResult';
import RcvListDelegatorsParameters from '../../../../../../definitions/RcvListDelegatorsParameters';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/delegators`;
  }

  /**
   * Returns the list of users who can delegate bridge/meeting creation to the given user.
   * HTTP Method: get
   * Endpoint: /rcvideo/v1/accounts/{accountId}/extensions/{extensionId}/delegators
   * Rate Limit Group: Medium
   * App Permission: Video
   */
  async get(queryParams?: RcvListDelegatorsParameters, restRequestConfig?: RestRequestConfig): Promise<DelegatorsListResult> {
    const r = await this.rc.get<DelegatorsListResult>(this.path(), queryParams, restRequestConfig);
    return r.data;
  }
}
export default Index;
