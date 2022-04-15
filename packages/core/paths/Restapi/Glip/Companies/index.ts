import { RestRequestConfig } from '../../../../Rest';
import { GlipCompany } from '../../../../definitions';
import Parent from '..';
import { RingCentral } from '../../../..';

class Index {
  rc: RingCentral;

  parent: Parent;

  companyId: string | null;

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
   * Returns information about one or more companies by their IDs.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/glip/companies/{companyId}
   * Rate Limit Group: Light
   * App Permission: TeamMessaging
   * User Permission: UnifiedAppDesktop
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<GlipCompany> {
    if (this.companyId === null) {
      throw new Error('companyId must be specified.');
    }
    const r = await this.rc.get<GlipCompany>(
      this.path(),
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
