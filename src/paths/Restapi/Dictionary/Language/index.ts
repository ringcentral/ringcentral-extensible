import {LanguageList, LanguageInfo} from '../../../../definitions';
import Parent from '..';
import RingCentral from '../../../..';

class Language {
  rc: RingCentral;
  languageId: string | null;
  parent: Parent;

  constructor(parent: Parent, languageId: string | null = null) {
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
   * Operation: Get Language List
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/dictionary/language
   */
  async list(): Promise<LanguageList> {
    const r = await this.rc.get<LanguageList>(this.path(false));
    return r.data;
  }

  /**
   * Operation: Get Language
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/dictionary/language/{languageId}
   */
  async get(): Promise<LanguageInfo> {
    if (this.languageId === null) {
      throw new Error('languageId must be specified.');
    }

    const r = await this.rc.get<LanguageInfo>(this.path());
    return r.data;
  }
}

export default Language;
