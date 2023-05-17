interface LicenseAssignmentEntry {
  /**
   * SKU of a license
   * Required
   */
  skuId?: string;

  /**
   * Required
   * Format: int64
   */
  extensionId?: number;
}

export default LicenseAssignmentEntry;
