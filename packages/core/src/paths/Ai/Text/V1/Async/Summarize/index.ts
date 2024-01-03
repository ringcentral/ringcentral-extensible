import type CaiAsyncApiResponse from '../../../../../../definitions/CaiAsyncApiResponse';
import type CaiSummarizeParameters from '../../../../../../definitions/CaiSummarizeParameters';
import type SummaryInput from '../../../../../../definitions/SummaryInput';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../../types';

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
   * Returns Conversational Summarization to webhook uri.
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
    const r = await this.rc.post<CaiAsyncApiResponse>(this.path(), summaryInput, queryParams, restRequestConfig);
    return r.data;
  }
}
export default Index;
