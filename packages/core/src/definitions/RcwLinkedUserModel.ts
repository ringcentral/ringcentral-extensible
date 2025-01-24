import type RcwDomainUserModel from "./RcwDomainUserModel";

/**
 * The internal IDs of RC-authenticated users.
 */
interface RcwLinkedUserModel {
  /** */
  linkedUser?: RcwDomainUserModel;
}

export default RcwLinkedUserModel;
