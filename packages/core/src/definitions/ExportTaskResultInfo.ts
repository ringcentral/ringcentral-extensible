interface ExportTaskResultInfo {
  /**
   * Internal identifier of a dataset
   */
  id?: string;

  /**
   * Link for downloading a dataset
   * Format: uri
   */
  uri?: string;

  /**
   * Size of ta dataset in bytes
   * Format: int64
   */
  size?: number;
}

export default ExportTaskResultInfo;
