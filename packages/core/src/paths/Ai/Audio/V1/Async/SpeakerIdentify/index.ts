import type CaiAsyncApiResponse from '../../../../../../definitions/CaiAsyncApiResponse';
import type CaiSpeakerIdentifyParameters from '../../../../../../definitions/CaiSpeakerIdentifyParameters';
import type IdentifyInput from '../../../../../../definitions/IdentifyInput';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../../types';

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
    const r = await this.rc.post<CaiAsyncApiResponse>(this.path(), identifyInput, queryParams, restRequestConfig);
    return r.data;
  }
}
export default Index;
