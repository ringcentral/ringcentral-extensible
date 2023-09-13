import SiteIVRSettingsUpdate from '../../../../../definitions/SiteIVRSettingsUpdate';
import SiteIVRSettings from '../../../../../definitions/SiteIVRSettings';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }

  public path(): string {
    return `${this._parent.path()}/ivr`;
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
  public async get(restRequestConfig?: RestRequestConfig): Promise<SiteIVRSettings> {
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
  public async put(siteIVRSettingsUpdate: SiteIVRSettingsUpdate, restRequestConfig?: RestRequestConfig): Promise<SiteIVRSettings> {
    const r = await this.rc.put<SiteIVRSettings>(this.path(), siteIVRSettingsUpdate, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
