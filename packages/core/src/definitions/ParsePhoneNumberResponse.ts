import type GetCountryInfoNumberParser from './GetCountryInfoNumberParser';
import type PhoneNumberInfoNumberParser from './PhoneNumberInfoNumberParser';

interface ParsePhoneNumberResponse {
  /**
   * Canonical URI of a resource
   * Format: uri
   */
  uri?: string;

  /**
   * Required
   */
  homeCountry?: GetCountryInfoNumberParser;

  /**
   * Parsed phone numbers information
   * Required
   */
  phoneNumbers?: PhoneNumberInfoNumberParser[];
}

export default ParsePhoneNumberResponse;
