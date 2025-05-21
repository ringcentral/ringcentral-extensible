import ApiError from "./ApiError.js";
import CommRemoveForwardingTargetsItemResourceBulkItem from "./CommRemoveForwardingTargetsItemResourceBulkItem.js";

interface CommRemoveForwardingTargetsItemResource {
  /**
   * Required
   */
  bulkItemSuccessful?: boolean;

  /** */
  bulkItemErrors?: ApiError[];

  /**
   * Ring target
   * Required
   */
  bulkItem?: CommRemoveForwardingTargetsItemResourceBulkItem;
}

export default CommRemoveForwardingTargetsItemResource;
