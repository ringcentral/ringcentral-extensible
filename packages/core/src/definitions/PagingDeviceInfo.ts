interface PagingDeviceInfo {
  /**
   * Internal identifier of a paging device
   */
  id?: string;

  /**
   * Link to a paging device resource
   * Format: uri
   */
  uri?: string;

  /**
   * Name of a paging device
   */
  name?: string;
}

export default PagingDeviceInfo;
