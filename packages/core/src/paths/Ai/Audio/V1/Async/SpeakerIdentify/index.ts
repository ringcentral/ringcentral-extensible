import CaiAsyncApiResponse from "../../../../../../definitions/CaiAsyncApiResponse.js";
import CaiSpeakerIdentifyParameters from "../../../../../../definitions/CaiSpeakerIdentifyParameters.js";
import IdentifyInput from "../../../../../../definitions/IdentifyInput.js";
import {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../../../types.js";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/speaker-identify`;
  }
  /**
   * Returns Speaker Identification to the provided webhook URI.
   * HTTP Method: post
   * Endpoint: /ai/audio/v1/async/speaker-identify
   * Rate Limit Group: Heavy
   * App Permission: AI
   */
  public async post(
    identifyInput: IdentifyInput,
    queryParams?: CaiSpeakerIdentifyParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<CaiAsyncApiResponse> {
    const r = await this.rc.post<CaiAsyncApiResponse>(
      this.path(),
      identifyInput,
      queryParams,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
