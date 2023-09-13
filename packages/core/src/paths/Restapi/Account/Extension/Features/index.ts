import FeatureList from '../../../../../definitions/FeatureList';
import ReadExtensionFeaturesParameters from '../../../../../definitions/ReadExtensionFeaturesParameters';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }

  public path(): string {
    return `${this._parent.path()}/features`;
  }

  /**
   * Returns a list of supported features and information on their
 * availability for the current extension. Specific feature(s) might
 * be checked by providing `featureId` query parameter. Multiple values
 * are supported in the format: `?featureId=Feature1&featureId=Feature2`.
 * To get only available features in order to decrease response size,
 * `availableOnly=true` query param might be specified. In case a feature
 * is available for the current user, `"available": true` is returned in
 * response for the record with the corresponding feature ID. Otherwise,
 * additional attribute `reason` is returned with the appropriate code:
 * - `ServicePlanLimitation` -  a feature is not included in account service plan;
 * - `AccountLimitation` - a feature is turned off for account;
 * - `ExtensionTypeLimitation` - a feature is not applicable for extension type;
 * - `ExtensionLimitation` - a feature is not available for extension, e.g., additional license required;
 * - `InsufficientPermissions` - required permission not granted to the current user (not the one, who is specified in the URL, but the one who's access token is used);
 * - `ConfigurationLimitation` - a feature is turned off for extension, e.g., by account administrator.
 *
 * Also, some features may have additional parameters, e.g., limits, which are returned in `params` attribute as a name-value collection:
 *
 *     {
 *       "id": "HUD",
 *       "available": true,
 *       "params": [
 *         {
 *           "name": "limitMax",
 *           "value": "100"
 *         }
 *       ]
 *     }
 *
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/features
   * Rate Limit Group: Medium
   * App Permission: ReadAccounts
   * User Permission: ReadExtensions
   */
  public async get(queryParams?: ReadExtensionFeaturesParameters, restRequestConfig?: RestRequestConfig): Promise<FeatureList> {
    const r = await this.rc.get<FeatureList>(this.path(), queryParams, restRequestConfig);
    return r.data;
  }
}
export default Index;
