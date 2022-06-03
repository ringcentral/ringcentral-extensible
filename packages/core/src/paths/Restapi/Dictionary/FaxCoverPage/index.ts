import ListFaxCoverPagesResponse from '../../../../definitions/ListFaxCoverPagesResponse';
import ListFaxCoverPagesParameters from '../../../../definitions/ListFaxCoverPagesParameters';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/fax-cover-page`;
  }

  /**
   * Returns fax cover pages available for the current extension.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/dictionary/fax-cover-page
   * Rate Limit Group: Light
   */
  async get(queryParams?: ListFaxCoverPagesParameters, restRequestConfig?: RestRequestConfig): Promise<ListFaxCoverPagesResponse> {
    const r = await this.rc.get<ListFaxCoverPagesResponse>(this.path(), queryParams, restRequestConfig);
    return r.data;
  }
}
export default Index;
