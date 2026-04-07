import CommForwardingTargetsResourceRecords from "./CommForwardingTargetsResourceRecords.js";
import EnumeratedPagingModel from "./EnumeratedPagingModel.js";

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
