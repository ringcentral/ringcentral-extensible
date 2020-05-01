import {ParamsInfo, ReasonInfo} from '.';

class FeatureInfo {
  /**
   * Internal identifier of a feature
   */
  id?: string;

  /**
   * Specifies if the feature is available for the current user according to services enabled for the account, type, entitlements and permissions of the extension. If the authorized user gets features of the other extension, only features that can be delegated are returned (such as configuration by administrators).
   */
  available?: boolean;

  /**
   */
  params?: ParamsInfo[];

  /**
   * Reason of the feature unavailability. Returned only if `available` is set to 'false'
   */
  reason?: ReasonInfo;
}

export default FeatureInfo;
