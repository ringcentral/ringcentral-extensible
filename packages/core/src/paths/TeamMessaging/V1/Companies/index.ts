import type TMCompanyInfo from '../../../../definitions/TMCompanyInfo';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public companyId: string | null;

  public constructor(_parent: ParentInterface, companyId: string | null = null) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.companyId = companyId;
  }

  public path(withParameter = true): string {
    if (withParameter && this.companyId !== null) {
      return `${this._parent.path()}/companies/${this.companyId}`;
    }
    return `${this._parent.path()}/companies`;
  }

  /**
   * Returns information about one or more companies by their IDs.
   * HTTP Method: get
   * Endpoint: /team-messaging/v1/companies/{companyId}
   * Rate Limit Group: Light
   * App Permission: TeamMessaging
   */
  public async get(restRequestConfig?: RestRequestConfig): Promise<TMCompanyInfo> {
    if (this.companyId === null) {
      throw new Error('companyId must be specified.');
    }
    const r = await this.rc.get<TMCompanyInfo>(this.path(), undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
