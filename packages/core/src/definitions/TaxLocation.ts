import PostalAddress from "./PostalAddress.js";

interface TaxLocation {
  /**
   * Internal identifier of a tax location
   * Required
   * Format: int64
   * Example: 981086004
   */
  id?: number;

  /**
   * Tax location name
   * Required
   * Example: Tax_Location
   */
  name?: string;

  /**
   * Type of the location object. Only 'TaxLocation' is currently supported for POST method
   * Required
   * Example: TaxLocation
   */
  type?: "BillingAddress" | "TaxLocation" | "Site";

  /**
   * Unique identifier of a tax location in the partner's system
   * Example: 4587834894962936
   */
  externalLocationId?: string;

  /**
   * Effective date in the ISO 8601 (`YYYY-MM-DDThh:mm:ssTZD`) format, including date, time, and timezone
   * Format: date-time
   * Example: Sun Jun 05 2022 03:11:12 GMT-0700 (Pacific Daylight Time)
   */
  effectiveDate?: string;

  /**
   * Required
   */
  address?: PostalAddress;
}

export default TaxLocation;
