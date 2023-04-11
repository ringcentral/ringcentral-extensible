import BulkAssign from './BulkAssign';
import Members from './Members';
import Ivr from './Ivr';
import SiteUpdateRequest from '../../../../definitions/SiteUpdateRequest';
import SiteInfo from '../../../../definitions/SiteInfo';
import CreateSiteRequest from '../../../../definitions/CreateSiteRequest';
import SitesList from '../../../../definitions/SitesList';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  siteId: string | null;

  constructor(parent: ParentInterface, siteId: string | null = null) {
    this.parent = parent;
    this.rc = parent.rc;
    this.siteId = siteId;
  }

  path(withParameter = true): string {
    if (withParameter && this.siteId !== null) {
      return `${this.parent.path()}/sites/${this.siteId}`;
    }
    return `${this.parent.path()}/sites`;
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
  async list(restRequestConfig?: RestRequestConfig): Promise<SitesList> {
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
  async post(createSiteRequest: CreateSiteRequest, restRequestConfig?: RestRequestConfig): Promise<SiteInfo> {
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
  async get(restRequestConfig?: RestRequestConfig): Promise<SiteInfo> {
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
  async put(siteUpdateRequest: SiteUpdateRequest, restRequestConfig?: RestRequestConfig): Promise<SiteInfo> {
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
  async delete(restRequestConfig?: RestRequestConfig): Promise<string> {
    if (this.siteId === null) {
      throw new Error('siteId must be specified.');
    }
    const r = await this.rc.delete<string>(this.path(), undefined, restRequestConfig);
    return r.data;
  }

  ivr(): Ivr {
    return new Ivr(this);
  }

  members(): Members {
    return new Members(this);
  }

  bulkAssign(): BulkAssign {
    return new BulkAssign(this);
  }
}
export default Index;
