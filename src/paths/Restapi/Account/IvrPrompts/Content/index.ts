import {RestRequestConfig} from '../../../../../Rest';
import Parent from '..';
import RingCentral from '../../../../..';

class Index {
  rc: RingCentral;
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/content`;
  }

  /**
   * Operation: Get IVR Prompt Content
   * Rate Limit Group: Medium
   * Http get /restapi/v1.0/account/{accountId}/ivr-prompts/{promptId}/content
   */
  async get(config?: RestRequestConfig): Promise<Buffer> {
    const r = await this.rc.get<Buffer>(this.path(), undefined, {
      ...config,
      responseType: 'arraybuffer',
    });
    return r.data;
  }
}

export default Index;
