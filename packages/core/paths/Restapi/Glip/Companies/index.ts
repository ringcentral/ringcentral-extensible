import {RestRequestConfig} from '../../../../Rest';
import {GlipCompany} from '../../../../definitions';
import Parent from '..';
import RingCentral from '../../../..';

class Index {
  rc: RingCentral;
  companyId: string | null;
  parent: Parent;

  constructor(parent: Parent, companyId: string | null = null) {
    this.parent = parent;
    this.rc = parent.rc;
    this.companyId = companyId;
  }

  path(withParameter = true): string {
    if (withParameter && this.companyId !== null) {
      return `${this.parent.path()}/companies/${this.companyId}`;
    }

    return `${this.parent.path()}/companies`;
  }

  /**
   * Operation: Get Company Info
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/glip/companies/{companyId}
   */
  async get(config?: RestRequestConfig): Promise<GlipCompany> {
    if (this.companyId === null) {
      throw new Error('companyId must be specified.');
    }

    const r = await this.rc.get<GlipCompany>(this.path(), undefined, config);
    return r.data;
  }
}

export default Index;
