import type CommForwardingTargetsResourceRecords from "./CommForwardingTargetsResourceRecords.js";
import type EnumeratedPagingModel from "./EnumeratedPagingModel.js";

interface CommForwardingTargetsResource {
  /**
   * Required
   */
  records?: CommForwardingTargetsResourceRecords[];

  /**
   * Required
   */
  paging?: EnumeratedPagingModel;
}

export default CommForwardingTargetsResource;
