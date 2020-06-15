import {RestRequestConfig} from '../../../../../Rest';
import {
  GetExtensionGrantListResponse,
  ListExtensionGrantsParameters,
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
    return `${this.parent.path()}/grant`;
  }

  /**
   * Operation: Get Extension Grant List
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/grant
   */
  async get(
    queryParams?: ListExtensionGrantsParameters,
    config?: RestRequestConfig
  ): Promise<GetExtensionGrantListResponse> {
    const r = await this.rc.get<GetExtensionGrantListResponse>(
      this.path(),
      queryParams,
      config
    );
    return r.data;
  }
}

export default Index;
