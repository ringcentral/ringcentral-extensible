import type CallRecordingExtensionResource from "./CallRecordingExtensionResource.js";
import type PageNavigationModel from "./PageNavigationModel.js";
import type EnumeratedPagingModel from "./EnumeratedPagingModel.js";

interface CallRecordingExtensions {
  /**
   * Link to call recording extension list resource
   * Format: uri
   */
  uri?: string;

  /**
   */
  records?: CallRecordingExtensionResource[];

  /**
   */
  navigation?: PageNavigationModel;

  /**
   */
  paging?: EnumeratedPagingModel;
}

export default CallRecordingExtensions;
