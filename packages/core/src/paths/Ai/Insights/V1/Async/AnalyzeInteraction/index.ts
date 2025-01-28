import CaiAsyncApiResponse from "../../../../../../definitions/CaiAsyncApiResponse";
import CaiAnalyzeInteractionParameters from "../../../../../../definitions/CaiAnalyzeInteractionParameters";
import InteractionInput from "../../../../../../definitions/InteractionInput";
import {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../../../types";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/analyze-interaction`;
  }
  /**
   * Returns multiple insights including summaries, emotion, key phrases, questions asked, and more in a single API call.
   *
   * HTTP Method: post
   * Endpoint: /ai/insights/v1/async/analyze-interaction
   * Rate Limit Group: Heavy
   * App Permission: AI
   */
  public async post(
    interactionInput: InteractionInput,
    queryParams?: CaiAnalyzeInteractionParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<CaiAsyncApiResponse> {
    const r = await this.rc.post<CaiAsyncApiResponse>(
      this.path(),
      interactionInput,
      queryParams,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
