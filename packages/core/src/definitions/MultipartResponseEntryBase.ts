interface MultipartResponseEntryBase {
  /**
   * Internal identifier of a resource
   * Required
   * Example: 1724099032020
   */
  resourceId?: string;

  /**
   * HTTP status code of an operation on given resource
   * Required
   * Format: int32
   * Example: 200
   */
  status?: number;
}

export default MultipartResponseEntryBase;
