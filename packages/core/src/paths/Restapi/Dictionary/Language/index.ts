import type LanguageInfo from '../../../../definitions/LanguageInfo';
import type LanguageList from '../../../../definitions/LanguageList';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public languageId: string | null;

  public constructor(_parent: ParentInterface, languageId: string | null = null) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.languageId = languageId;
  }

  public path(withParameter = true): string {
    if (withParameter && this.languageId !== null) {
      return `${this._parent.path()}/language/${this.languageId}`;
    }
    return `${this._parent.path()}/language`;
  }

  /**
   * Returns information about the supported languages.
   *
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/dictionary/language
   * Rate Limit Group: Light
   */
  public async list(restRequestConfig?: RestRequestConfig): Promise<LanguageList> {
    const r = await this.rc.get<LanguageList>(this.path(false), undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Returns a language by ID.
   *
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/dictionary/language/{languageId}
   * Rate Limit Group: Light
   */
  public async get(restRequestConfig?: RestRequestConfig): Promise<LanguageInfo> {
    if (this.languageId === null) {
      throw new Error('languageId must be specified.');
    }
    const r = await this.rc.get<LanguageInfo>(this.path(), undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
