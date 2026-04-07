import type EnumeratedPagingModel from "./EnumeratedPagingModel.js";
import type ExtensionInfo from "./ExtensionInfo.js";
import type PageNavigationModel from "./PageNavigationModel.js";

/**
 * Please note that legacy 'Department' extension type corresponds to
 * 'Call Queue' extensions in modern RingCentral product terminology
 *
 */
interface DepartmentMemberList {
  /**
   * Canonical URL of the resource
   * Format: uri
   */
  uri?: string;

  /**
   * List of call queue member extensions
   */
  records?: ExtensionInfo[];

  /**
   */
  navigation?: PageNavigationModel;

  /**
   */
  paging?: EnumeratedPagingModel;
}

export default DepartmentMemberList;
