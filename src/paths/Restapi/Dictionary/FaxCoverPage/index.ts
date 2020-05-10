import {RestRequestConfig} from '../../../../Rest';
import {
  ListFaxCoverPagesResponse,
  ListFaxCoverPagesParameters,
} from '../../../../definitions';
import Parent from '..';
import RingCentral from '../../../..';

class FaxCoverPage {
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
   * Operation: Get Fax Cover Page List
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/dictionary/fax-cover-page
   */
  async get(
    queryParams?: ListFaxCoverPagesParameters,
    config?: RestRequestConfig
  ): Promise<ListFaxCoverPagesResponse> {
    const r = await this.rc.get<ListFaxCoverPagesResponse>(
      this.path(),
      queryParams,
      config
    );
    return r.data;
  }
}

export default FaxCoverPage;
