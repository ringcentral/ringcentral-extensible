import SiteIVRSettingsUpdate from '../../../../../definitions/SiteIVRSettingsUpdate';
import SiteIVRSettings from '../../../../../definitions/SiteIVRSettings';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/ivr`;
  }

  /**
   * Returns IVR settings for a site specified in path.
 *
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/sites/{siteId}/ivr
   * Rate Limit Group: Medium
   * App Permission: ReadAccounts
   * User Permission: ReadExtensions
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<SiteIVRSettings> {
    const r = await this.rc.get<SiteIVRSettings>(this.path(), undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Updates IVR settings for a site specified in path.
 *
   * HTTP Method: put
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/sites/{siteId}/ivr
   * Rate Limit Group: Medium
   * App Permission: EditAccounts
   * User Permission: Sites
   */
  async put(siteIVRSettingsUpdate: SiteIVRSettingsUpdate, restRequestConfig?: RestRequestConfig): Promise<SiteIVRSettings> {
    const r = await this.rc.put<SiteIVRSettings>(this.path(), siteIVRSettingsUpdate, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
