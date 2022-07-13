import GetCountryInfoNumberParser from './GetCountryInfoNumberParser';
import PhoneNumberInfoNumberParser from './PhoneNumberInfoNumberParser';

interface ParsePhoneNumberResponse {
  /**
   * Canonical URI of a resource
   */
  uri?: string;

  /**
   * Required
   */
  homeCountry?: GetCountryInfoNumberParser;

  /**
   * Parsed phone numbers data
   * Required
   */
  phoneNumbers?: PhoneNumberInfoNumberParser[];
}

export default ParsePhoneNumberResponse;
