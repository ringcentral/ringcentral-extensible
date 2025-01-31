import CaiAsyncApiResponse from "../../../../../../definitions/CaiAsyncApiResponse.js";
import CaiPunctuateParameters from "../../../../../../definitions/CaiPunctuateParameters.js";
import PunctuateInput from "../../../../../../definitions/PunctuateInput.js";
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
    return `${this._parent.path()}/punctuate`;
  }
  /**
   * Returns Smart Punctuation to the provided webhook URI.
   * HTTP Method: post
   * Endpoint: /ai/text/v1/async/punctuate
   * Rate Limit Group: Heavy
   * App Permission: AI
   */
  public async post(
    punctuateInput: PunctuateInput,
    queryParams?: CaiPunctuateParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<CaiAsyncApiResponse> {
    const r = await this.rc.post<CaiAsyncApiResponse>(
      this.path(),
      punctuateInput,
      queryParams,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
