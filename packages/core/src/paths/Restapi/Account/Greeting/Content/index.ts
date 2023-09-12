import ReadAccountGreetingContentParameters from '../../../../../definitions/ReadAccountGreetingContentParameters';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }

  public path(withParameter = false): string {
    return `${this._parent.path()}/content`;
  }

  /**
   * Returns account-level greeting media contents.
 *
 * **This API must be called via media API entry point, e.g. https://media.ringcentral.com**
 *
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/greeting/{greetingId}/content
   * Rate Limit Group: Heavy
   * App Permission: ReadAccounts
   */
  public async get(queryParams?: ReadAccountGreetingContentParameters, restRequestConfig?: RestRequestConfig): Promise<Buffer> {
    const r = await this.rc.get<Buffer>(this.path(), queryParams, { ...restRequestConfig, responseType: 'arraybuffer' });
    return r.data;
  }
}
export default Index;
