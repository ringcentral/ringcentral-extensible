import GetCountryInfoNumberParser from './GetCountryInfoNumberParser'
import PhoneNumberInfoNumberParser from './PhoneNumberInfoNumberParser'

class ParsePhoneNumberResponse
{
  /**
   * Canonical URI of a resource
   */
  uri?: string

  /**
   * Information on a user home country
   * Required
   */
  homeCountry?: GetCountryInfoNumberParser

  /**
   * Parsed phone numbers data
   * Required
   */
  phoneNumbers?: PhoneNumberInfoNumberParser[]
}

export default ParsePhoneNumberResponse
