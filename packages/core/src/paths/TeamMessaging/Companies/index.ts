import TMCompanyInfo from '../../../definitions/TMCompanyInfo';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  companyId: string | null;

  constructor(parent: ParentInterface, companyId: string | null = null) {
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
   * Endpoint: /team-messaging/{version}/companies/{companyId}
   * Rate Limit Group: Light
   * App Permission: TeamMessaging
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<TMCompanyInfo> {
    if (this.companyId === null) {
      throw new Error('companyId must be specified.');
    }
    const r = await this.rc.get<TMCompanyInfo>(this.path(), undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
