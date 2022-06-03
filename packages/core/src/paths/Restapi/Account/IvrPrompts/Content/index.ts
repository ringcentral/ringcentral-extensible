import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/content`;
  }

  /**
   * Returns media content of an IVR prompt by ID.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/ivr-prompts/{promptId}/content
   * Rate Limit Group: Medium
   * App Permission: ReadAccounts
   * User Permission: ReadCompanyGreetings
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<Buffer> {
    const r = await this.rc.get<Buffer>(this.path(), undefined, { ...restRequestConfig, responseType: 'arraybuffer' });
    return r.data;
  }
}
export default Index;
