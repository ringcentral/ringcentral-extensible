import GetCountryInfoConferencing from './GetCountryInfoConferencing'

class PhoneNumberInfoConferencing
{
    /// <summary>
    /// Information on a home country of a conference phone number
    /// </summary>
    country: GetCountryInfoConferencing

    /// <summary>
    /// 'True' if the number is default for the conference. Default conference number is a domestic number that can be set by user (otherwise it is set by the system). Only one default number per country is allowed
    /// </summary>
    default: boolean

    /// <summary>
    /// 'True' if the greeting message is played on this number
    /// </summary>
    hasGreeting: boolean

    /// <summary>
    /// Location (city, region, state) of a conference phone number
    /// </summary>
    location: string

    /// <summary>
    /// Dial-in phone number to connect to a conference
    /// </summary>
    phoneNumber: string

    /// <summary>
    /// Indicates if the number is 'premium' (account phone number with the `ConferencingNumber` usageType)
    /// </summary>
    premium: boolean
}

export default PhoneNumberInfoConferencing