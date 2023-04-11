import CaiAsyncApiResponse from '../../../../../../definitions/CaiAsyncApiResponse';
import CaiAnalyzeInteractionParameters from '../../../../../../definitions/CaiAnalyzeInteractionParameters';
import InteractionInput from '../../../../../../definitions/InteractionInput';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/analyze-interaction`;
  }

  /**
   * Returns Interaction Analytics to the provided webhook uri.
   * HTTP Method: post
   * Endpoint: /ai/insights/v1/async/analyze-interaction
   * Rate Limit Group: Heavy
   * App Permission: AI
   */
  async post(interactionInput: InteractionInput, queryParams?: CaiAnalyzeInteractionParameters, restRequestConfig?: RestRequestConfig): Promise<CaiAsyncApiResponse> {
    const r = await this.rc.post<CaiAsyncApiResponse>(this.path(), interactionInput, queryParams, restRequestConfig);
    return r.data;
  }
}
export default Index;
