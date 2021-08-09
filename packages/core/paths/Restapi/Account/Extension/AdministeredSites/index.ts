import {RestRequestConfig} from '../../../../../Rest';
import {
  BusinessSiteCollectionRequest,
  BusinessSiteCollectionResource,
} from '../../../../../definitions';
import Parent from '..';
import {RingCentral} from '../../../../..';

class Index {
  rc: RingCentral;
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }
  path(): string {
    return `${this.parent.path()}/administered-sites`;
  }
  /**
   * Returns the list of sites administered by the current user.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/administered-sites
   * Rate Limit Group: Medium
   * App Permission: ReadAccounts
   * User Permission: ReadExtensions
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<string> {
    const r = await this.rc.get<string>(
      this.path(),
      undefined,
      restRequestConfig
    );
    return r.data;
  }

  /**
   * Updates user administered sites. Note: only IDs of records are used for update.
   * HTTP Method: put
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/administered-sites
   * Rate Limit Group: Medium
   * App Permission: EditAccounts
   * User Permission: EditAssignedRoles
   */
  async put(
    businessSiteCollectionRequest: BusinessSiteCollectionRequest,
    restRequestConfig?: RestRequestConfig
  ): Promise<BusinessSiteCollectionResource> {
    const r = await this.rc.put<BusinessSiteCollectionResource>(
      this.path(),
      businessSiteCollectionRequest,
      undefined,
      restRequestConfig
    );
    return r.data;
  }
}
export default Index;
