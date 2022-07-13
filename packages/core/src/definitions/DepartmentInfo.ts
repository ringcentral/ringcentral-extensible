/**
 * Please note that legacy 'Department' extension type corresponds to 'Call Queue' extensions in modern RingCentral product terminology
*/
interface DepartmentInfo {
  /**
   * Internal identifier of a department extension
   */
  id?: string;

  /**
   * Canonical URI of a department extension
   */
  uri?: string;

  /**
   * Number of a department extension
   */
  extensionNumber?: string;
}

export default DepartmentInfo;
