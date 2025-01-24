import type RcwDomainUserModel from "./RcwDomainUserModel";

/**
 * The internal IDs of RC-authenticated users.
 */
interface HostModel {
  /**
   * First (given) name
   * Example: John
   */
  firstName?: string;

  /**
   * Last (family) name
   * Example: Doe
   */
  lastName?: string;

  /** */
  linkedUser?: RcwDomainUserModel;
}

export default HostModel;
