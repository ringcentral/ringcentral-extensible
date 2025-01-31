import CallerIdByDeviceRequest from "./CallerIdByDeviceRequest.js";
import CallerIdByFeatureRequest from "./CallerIdByFeatureRequest.js";

interface ExtensionCallerIdInfoRequest {
  /**
   * Canonical URL of a caller ID resource
   * Format: uri
   */
  uri?: string;

  /** */
  byDevice?: CallerIdByDeviceRequest[];

  /** */
  byFeature?: CallerIdByFeatureRequest[];

  /**
   * If `true`, then the user first name and last name will be used
   *  as caller ID when making outbound calls from extension
   */
  extensionNameForOutboundCalls?: boolean;

  /**
   * If `true`, then extension number will be used as caller ID
   *  when making internal calls
   */
  extensionNumberForInternalCalls?: boolean;
}

export default ExtensionCallerIdInfoRequest;
