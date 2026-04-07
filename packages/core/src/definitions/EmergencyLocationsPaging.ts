interface EmergencyLocationsPaging {
  /**
   * Required
   * Format: int32
   */
  page?: number;

  /**
   * Required
   * Format: int32
   */
  totalPages?: number;

  /**
   * Required
   * Format: int32
   */
  perPage?: number;

  /**
   * Required
   * Format: int32
   */
  totalElements?: number;

  /**
   * Required
   * Format: int32
   */
  pageStart?: number;

  /**
   * Required
   * Format: int32
   */
  pageEnd?: number;
}

export default EmergencyLocationsPaging;
