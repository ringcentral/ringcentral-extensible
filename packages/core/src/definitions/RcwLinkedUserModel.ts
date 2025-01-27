import RcwDomainUserModel from "./RcwDomainUserModel.js";

/**
 * The internal IDs of RC-authenticated users.
 */
interface RcwLinkedUserModel {
  /** */
  linkedUser?: RcwDomainUserModel;
}

export default RcwLinkedUserModel;
