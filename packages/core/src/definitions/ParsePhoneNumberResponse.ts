import GetCountryInfoNumberParser from "./GetCountryInfoNumberParser";
import PhoneNumberInfoNumberParser from "./PhoneNumberInfoNumberParser";

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
