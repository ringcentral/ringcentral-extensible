import ParamsInfo from "./ParamsInfo.js";
import ReasonInfo from "./ReasonInfo.js";

interface FeatureInfo {
  /**
   * Internal identifier of a feature
   * Required
   */
  id?: string;

  /**
   * Specifies if the feature is available for the current user
   *  according to services enabled for the account, type, entitlements and
   *  permissions of the extension. If the authorized user gets features of
   *  the other extension, only features that can be delegated are returned
   *  (such as configuration by administrators).
   * Required
   */
  available?: boolean;

  /** */
  params?: ParamsInfo[];

  /** */
  reason?: ReasonInfo;
}

export default FeatureInfo;
