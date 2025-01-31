import ExtensionInfo from "./ExtensionInfo.js";
import PageNavigationModel from "./PageNavigationModel.js";
import EnumeratedPagingModel from "./EnumeratedPagingModel.js";

/**
 * Please note that legacy 'Department' extension type corresponds to
 * 'Call Queue' extensions in modern RingCentral product terminology
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

  /** */
  navigation?: PageNavigationModel;

  /** */
  paging?: EnumeratedPagingModel;
}

export default DepartmentMemberList;
