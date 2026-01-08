import ReadAccountGreetingContentParameters from "../../../../../definitions/ReadAccountGreetingContentParameters.js";
import {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../../types.js";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
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
  public async get(
    queryParams?: ReadAccountGreetingContentParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<Uint8Array> {
    const r = await this.rc.get<Uint8Array>(this.path(), queryParams, {
      ...restRequestConfig,
      responseType: "arraybuffer",
    });
    return r.data;
  }
}
export default Index;
