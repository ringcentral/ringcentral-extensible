/**
 * User's business address. The default is
 * Company (Auto-Receptionist) settings
 *
 */
interface ContactBusinessAddressInfo {
  /**
   * Country name of a user's company
   */
  country?: string;

  /**
   * State/province name of a user's company. Mandatory
   *  for the USA, UK and Canada
   */
  state?: string;

  /**
   * City name of a user's company
   */
  city?: string;

  /**
   * Street address of a user's company
   */
  street?: string;

  /**
   * Zip code of a user's company
   */
  zip?: string;
}

export default ContactBusinessAddressInfo;
