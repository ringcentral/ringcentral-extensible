import CallerIdByDevice from "./CallerIdByDevice.js";
import CallerIdByFeature from "./CallerIdByFeature.js";

interface ExtensionCallerIdInfo {
  /**
   * Canonical URL of a caller ID resource
   * Format: uri
   */
  uri?: string;

  /** */
  byDevice?: CallerIdByDevice[];

  /** */
  byFeature?: CallerIdByFeature[];

  /**
   * If `true`, then user first name and last name will be used
   *  as caller ID when making outbound calls from extension
   */
  extensionNameForOutboundCalls?: boolean;

  /**
   * If `true`, then extension number will be used as caller ID
   *  when making internal calls
   */
  extensionNumberForInternalCalls?: boolean;
}

export default ExtensionCallerIdInfo;
