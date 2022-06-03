import LanguageInfo from '../../../../definitions/LanguageInfo';
import LanguageList from '../../../../definitions/LanguageList';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  languageId: string | null;

  constructor(parent: ParentInterface, languageId: string | null = null) {
    this.parent = parent;
    this.rc = parent.rc;
    this.languageId = languageId;
  }

  path(withParameter = true): string {
    if (withParameter && this.languageId !== null) {
      return `${this.parent.path()}/language/${this.languageId}`;
    }
    return `${this.parent.path()}/language`;
  }

  /**
   * Returns the information about supported languages.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/dictionary/language
   * Rate Limit Group: Light
   */
  async list(restRequestConfig?: RestRequestConfig): Promise<LanguageList> {
    const r = await this.rc.get<LanguageList>(this.path(false), undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Returns language by ID.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/dictionary/language/{languageId}
   * Rate Limit Group: Light
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<LanguageInfo> {
    if (this.languageId === null) {
      throw new Error('languageId must be specified.');
    }
    const r = await this.rc.get<LanguageInfo>(this.path(), undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
