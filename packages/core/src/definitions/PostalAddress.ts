/**
 * Postal address/location
 */
interface PostalAddress {
  /**
   * Street address
   * Required
   * Example: 20 Davis Dr
   */
  street?: string;

  /**
   * Street address (2nd line)
   */
  street2?: string;

  /**
   * City name
   * Required
   * Example: Belmont
   */
  city?: string;

  /**
   * State or province information in the target country
   * Example: CA
   */
  state?: string;

  /**
   * Postal code in the target country
   * Required
   * Example: 94002
   */
  zip?: string;

  /**
   * ISO-3166-1 2-letter country code (alpha2)
   * Required
   * Example: US
   */
  country?: string;
}

export default PostalAddress;
