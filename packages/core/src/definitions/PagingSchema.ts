interface PagingSchema {
  /**
   * Required
   * Format: int32
   * Example: 2
   */
  page?: number;

  /**
   * Required
   * Format: int32
   * Example: 10
   */
  totalPages?: number;

  /**
   * Required
   * Format: int32
   * Example: 5
   */
  perPage?: number;
}

export default PagingSchema;
