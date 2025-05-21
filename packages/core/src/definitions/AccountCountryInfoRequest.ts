interface AccountCountryInfoRequest {
  /**
   * Internal identifier of a country
   * Required
   */
  id?: string;

  /**
   * Two-letter country code in ISO 3166-1 alpha-2 format
   * Required
   */
  isoCode?: string;
}

export default AccountCountryInfoRequest;
