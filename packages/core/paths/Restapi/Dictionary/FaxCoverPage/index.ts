import {RestRequestConfig} from '../../../../Rest';
import {
  ListFaxCoverPagesParameters,
  ListFaxCoverPagesResponse,
} from '../../../../definitions';
import Parent from '..';
import RingCentral from '../../../..';

class Index {
  rc: RingCentral;
  parent: Parent;

  constructor(parent: Parent) {
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
  async get(
    queryParams?: ListFaxCoverPagesParameters,
    restRequestConfig?: RestRequestConfig
  ): Promise<ListFaxCoverPagesResponse> {
    const r = await this.rc.get<ListFaxCoverPagesResponse>(
      this.path(),
      queryParams,
      restRequestConfig
    );
    return r.data;
  }
}

export default Index;
