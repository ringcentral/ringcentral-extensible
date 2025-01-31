import GetCountryInfoNumberParser from "./GetCountryInfoNumberParser.js";
import PhoneNumberInfoNumberParser from "./PhoneNumberInfoNumberParser.js";

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
