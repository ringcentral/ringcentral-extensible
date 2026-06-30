/**
 * One of the parameters ('addedExtensionIds', 'removedExtensionIds') must be specified and not empty.
 */
interface BulkAssignSmsRecipientsRequest {
  /**
   * List of added extensions.
   *  maxItems values depends on MessageThreads feature.
   *  If the feature is disabled maxItems=1, otherwise 50.
   */
  addedExtensionIds?: string[];

  /**
   * List of removed extensions.
   *  maxItems values depends on MessageThreads feature.
   *  If the feature is disabled maxItems=1, otherwise 50.
   */
  removedExtensionIds?: string[];
}

export default BulkAssignSmsRecipientsRequest;
