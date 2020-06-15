import {RestRequestConfig} from '../../../../../Rest';
import {FaxResponse, CreateFaxMessageRequest} from '../../../../../definitions';
import Utils from '../../../../../Utils';
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
    return `${this.parent.path()}/fax`;
  }

  /**
   * Operation: Create Fax Message
   * Rate Limit Group: Heavy
   * Http post /restapi/v1.0/account/{accountId}/extension/{extensionId}/fax
   */
  async post(
    createFaxMessageRequest: CreateFaxMessageRequest,
    config?: RestRequestConfig
  ): Promise<FaxResponse> {
    const formData = Utils.getFormData(createFaxMessageRequest);
    const r = await this.rc.post<FaxResponse>(
      this.path(),
      formData,
      undefined,
      {...config, headers: {...config?.headers, ...formData.getHeaders()}}
    );
    return r.data;
  }
}

export default Index;
