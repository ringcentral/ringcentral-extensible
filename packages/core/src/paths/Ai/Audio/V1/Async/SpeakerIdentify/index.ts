import CaiAsyncApiResponse from '../../../../../../definitions/CaiAsyncApiResponse';
import CaiSpeakerIdentifyParameters from '../../../../../../definitions/CaiSpeakerIdentifyParameters';
import IdentifyInput from '../../../../../../definitions/IdentifyInput';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/speaker-identify`;
  }

  /**
   * Returns Speaker Identification to the provided webhook uri.
   * HTTP Method: post
   * Endpoint: /ai/audio/v1/async/speaker-identify
   * Rate Limit Group: Heavy
   * App Permission: AI
   */
  async post(identifyInput: IdentifyInput, queryParams?: CaiSpeakerIdentifyParameters, restRequestConfig?: RestRequestConfig): Promise<CaiAsyncApiResponse> {
    const r = await this.rc.post<CaiAsyncApiResponse>(this.path(), identifyInput, queryParams, restRequestConfig);
    return r.data;
  }
}
export default Index;
