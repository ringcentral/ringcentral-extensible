interface SiteMembersBulkUpdate {
  /**
   * List of removed extensions
   */
  removedExtensionIds?: string[];

  /**
   * List of added extensions
   */
  addedExtensionIds?: string[];
}

export default SiteMembersBulkUpdate;
