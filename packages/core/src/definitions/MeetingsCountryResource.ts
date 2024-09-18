interface MeetingsCountryResource {
  /**
   * Format: uri
   */
  uri?: string;

  /**
   */
  id?: string;

  /**
   */
  name?: string;

  /**
   * Two-letter country code in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format
   * Example: US
   */
  isoCode?: string;

  /**
   * Country calling code defined by [ITU-T](http://en.wikipedia.org/wiki/ITU-T)
   *  recommendations, [E.123](http://en.wikipedia.org/wiki/E.123) and
   *  [E.164](http://en.wikipedia.org/wiki/E.164).
   *  See also [Calling Codes](http://en.wikipedia.org/wiki/List_of_country_calling_codes)
   */
  callingCode?: string;

  /**
   */
  emergencyCalling?: boolean;

  /**
   */
  numberSelling?: boolean;

  /**
   */
  loginAllowed?: boolean;
}

export default MeetingsCountryResource;
