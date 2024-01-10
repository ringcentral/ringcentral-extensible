import BulkAssign from './BulkAssign';
import Members from './Members';
import Ivr from './Ivr';
import type SiteUpdateRequest from '../../../../definitions/SiteUpdateRequest';
import type SiteInfo from '../../../../definitions/SiteInfo';
import type CreateSiteRequest from '../../../../definitions/CreateSiteRequest';
import type SitesList from '../../../../definitions/SitesList';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../types';

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;
  public siteId: string | null;

  public constructor(_parent: ParentInterface, siteId: string | null = null) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.siteId = siteId;
  }
  public path(withParameter = true): string {
    if (withParameter && this.siteId !== null) {
      return `${this._parent.path()}/sites/${this.siteId}`;
    }
    return `${this._parent.path()}/sites`;
  }
  /**
   * Returns a list of sites for the specified account.
   *
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/sites
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   * User Permission: ReadExtensions
   */
  public async list(restRequestConfig?: RestRequestConfig): Promise<SitesList> {
    const r = await this.rc.get<SitesList>(this.path(false), undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Creates a site for the specified account.
   *
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/sites
   * Rate Limit Group: Medium
   * App Permission: EditAccounts
   */
  public async post(createSiteRequest: CreateSiteRequest, restRequestConfig?: RestRequestConfig): Promise<SiteInfo> {
    const r = await this.rc.post<SiteInfo>(this.path(false), createSiteRequest, undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Returns a site by ID.
   *
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/sites/{siteId}
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   * User Permission: ReadExtensions
   */
  public async get(restRequestConfig?: RestRequestConfig): Promise<SiteInfo> {
    if (this.siteId === null) {
      throw new Error('siteId must be specified.');
    }
    const r = await this.rc.get<SiteInfo>(this.path(), undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Updates a site specified in path.
   *
   * HTTP Method: put
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/sites/{siteId}
   * Rate Limit Group: Light
   * App Permission: EditExtensions
   * User Permission: Sites
   */
  public async put(siteUpdateRequest: SiteUpdateRequest, restRequestConfig?: RestRequestConfig): Promise<SiteInfo> {
    if (this.siteId === null) {
      throw new Error('siteId must be specified.');
    }
    const r = await this.rc.put<SiteInfo>(this.path(), siteUpdateRequest, undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Deletes a site specified in path.
   *
   * HTTP Method: delete
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/sites/{siteId}
   * Rate Limit Group: Light
   * App Permission: EditAccounts
   * User Permission: Sites
   */
  public async delete(restRequestConfig?: RestRequestConfig): Promise<string> {
    if (this.siteId === null) {
      throw new Error('siteId must be specified.');
    }
    const r = await this.rc.delete<string>(this.path(), {}, undefined, restRequestConfig);
    return r.data;
  }

  public ivr(): Ivr {
    return new Ivr(this);
  }

  public members(): Members {
    return new Members(this);
  }

  public bulkAssign(): BulkAssign {
    return new BulkAssign(this);
  }
}
export default Index;
