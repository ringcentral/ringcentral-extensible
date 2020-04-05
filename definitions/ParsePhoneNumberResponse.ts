import GetCountryInfoNumberParser from './GetCountryInfoNumberParser'
import PhoneNumberInfoNumberParser from './PhoneNumberInfoNumberParser'

class ParsePhoneNumberResponse
{
    /// <summary>
    /// Canonical URI of a resource
    /// </summary>
    uri: string

    /// <summary>
    /// Information on a user home country
    /// Required
    /// </summary>
    homeCountry: GetCountryInfoNumberParser

    /// <summary>
    /// Parsed phone numbers data
    /// Required
    /// </summary>
    phoneNumbers: PhoneNumberInfoNumberParser[]
}

export default ParsePhoneNumberResponse