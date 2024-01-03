import type CaiAsyncApiResponse from '../../../../../../definitions/CaiAsyncApiResponse';
import type CaiSpeakerDiarizeParameters from '../../../../../../definitions/CaiSpeakerDiarizeParameters';
import type DiarizeInput from '../../../../../../definitions/DiarizeInput';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../../types';

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/speaker-diarize`;
  }
  /**
   * Identifies who said what. Speaker diarization will identify the speaker for each segment
   * so you can tell who spoke the sentence, paragraph, or phrase.
   *
   * HTTP Method: post
   * Endpoint: /ai/audio/v1/async/speaker-diarize
   * Rate Limit Group: Heavy
   * App Permission: AI
   */
  public async post(
    diarizeInput: DiarizeInput,
    queryParams?: CaiSpeakerDiarizeParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<CaiAsyncApiResponse> {
    const r = await this.rc.post<CaiAsyncApiResponse>(this.path(), diarizeInput, queryParams, restRequestConfig);
    return r.data;
  }
}
export default Index;
