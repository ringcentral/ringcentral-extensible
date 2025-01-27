import ReadIVRPromptContentParameters from "../../../../../definitions/ReadIVRPromptContentParameters.js";
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
   * Returns media content of an IVR prompt by ID.
   *
   * **This API must be called via media API entry point, e.g. https://media.ringcentral.com**
   *
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/ivr-prompts/{promptId}/content
   * Rate Limit Group: Heavy
   * App Permission: ReadAccounts
   */
  public async get(
    queryParams?: ReadIVRPromptContentParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<Buffer> {
    const r = await this.rc.get<Buffer>(this.path(), queryParams, {
      ...restRequestConfig,
      responseType: "arraybuffer",
    });
    return r.data;
  }
}
export default Index;
