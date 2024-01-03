import type CaiAsyncApiResponse from '../../../../../../definitions/CaiAsyncApiResponse';
import type CaiSpeechToTextParameters from '../../../../../../definitions/CaiSpeechToTextParameters';
import type AsrInput from '../../../../../../definitions/AsrInput';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../../types';

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/speech-to-text`;
  }
  /**
   * Returns Speech to Text Conversion to the provided webhook uri.
   * HTTP Method: post
   * Endpoint: /ai/audio/v1/async/speech-to-text
   * Rate Limit Group: Heavy
   * App Permission: AI
   */
  public async post(
    asrInput: AsrInput,
    queryParams?: CaiSpeechToTextParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<CaiAsyncApiResponse> {
    const r = await this.rc.post<CaiAsyncApiResponse>(this.path(), asrInput, queryParams, restRequestConfig);
    return r.data;
  }
}
export default Index;
