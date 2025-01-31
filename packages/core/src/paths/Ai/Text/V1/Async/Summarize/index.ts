import CaiAsyncApiResponse from "../../../../../../definitions/CaiAsyncApiResponse.js";
import CaiSummarizeParameters from "../../../../../../definitions/CaiSummarizeParameters.js";
import SummaryInput from "../../../../../../definitions/SummaryInput.js";
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
    return `${this._parent.path()}/summarize`;
  }
  /**
   * Returns Conversational Summarization to the webhook URI for segmented transcript of audios
   * with start, end, speakerId, text(alphanumeric and punctuations).
   *
   * HTTP Method: post
   * Endpoint: /ai/text/v1/async/summarize
   * Rate Limit Group: Heavy
   * App Permission: AI
   */
  public async post(
    summaryInput: SummaryInput,
    queryParams?: CaiSummarizeParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<CaiAsyncApiResponse> {
    const r = await this.rc.post<CaiAsyncApiResponse>(
      this.path(),
      summaryInput,
      queryParams,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
