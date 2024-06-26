interface PagingGroupExtensionInfo {
  /**
   * Internal identifier of a paging group user extension
   */
  id?: string;

  /**
   * Link to a paging group user extension
   * Format: uri
   */
  uri?: string;

  /**
   * Extension number of a paging group user
   */
  extensionNumber?: string;

  /**
   * Name of a paging group user
   */
  name?: string;
}

export default PagingGroupExtensionInfo;
