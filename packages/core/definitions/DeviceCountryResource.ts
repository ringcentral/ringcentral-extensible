// Brief information on a phone number country
class DeviceCountryResource {
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
   */
  isoCode?: string;

  /**
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

export default DeviceCountryResource;