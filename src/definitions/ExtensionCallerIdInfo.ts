import {CallerIdByDevice, CallerIdByFeature} from '.';

class ExtensionCallerIdInfo {
  /**
   * Canonical URL of a caller ID resource
   */
  uri?: string;

  /**
   */
  byDevice?: CallerIdByDevice[];

  /**
   */
  byFeature?: CallerIdByFeature[];

  /**
   * If 'True', then user first name and last name will be used as caller ID when making outbound calls from extension
   */
  extensionNameForOutboundCalls?: boolean;

  /**
   * If 'True', then extension number will be used as caller ID when making internal calls
   */
  extensionNumberForInternalCalls?: boolean;
}

export default ExtensionCallerIdInfo;
