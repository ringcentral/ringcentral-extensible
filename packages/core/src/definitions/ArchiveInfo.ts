interface ArchiveInfo {
  /**
   * Archive size in bytes
   * Format: int64
   * Example: 201412
   */
  size?: number;

  /**
   * Link for archive download
   * Format: uri
   */
  uri?: string;
}

export default ArchiveInfo;
