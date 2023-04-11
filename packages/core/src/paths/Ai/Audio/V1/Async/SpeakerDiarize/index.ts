import CaiAsyncApiResponse from '../../../../../../definitions/CaiAsyncApiResponse';
import CaiSpeakerDiarizeParameters from '../../../../../../definitions/CaiSpeakerDiarizeParameters';
import DiarizeInput from '../../../../../../definitions/DiarizeInput';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/speaker-diarize`;
  }

  /**
   * Returns Speaker Diarization to the provided webhook uri.
   * HTTP Method: post
   * Endpoint: /ai/audio/v1/async/speaker-diarize
   * Rate Limit Group: Heavy
   * App Permission: AI
   */
  async post(diarizeInput: DiarizeInput, queryParams?: CaiSpeakerDiarizeParameters, restRequestConfig?: RestRequestConfig): Promise<CaiAsyncApiResponse> {
    const r = await this.rc.post<CaiAsyncApiResponse>(this.path(), diarizeInput, queryParams, restRequestConfig);
    return r.data;
  }
}
export default Index;
