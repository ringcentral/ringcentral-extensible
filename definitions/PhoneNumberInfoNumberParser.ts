import GetCountryInfoNumberParser from './GetCountryInfoNumberParser'

class PhoneNumberInfoNumberParser
{
    /// <summary>
    /// Area code of location. The portion of the [E.164](https://www.itu.int/rec/T-REC-E.164-201011-I) number that identifies a specific geographic region/numbering area of the national numbering plan (NANP); that can be summarized as `NPA-NXX-xxxx` and covers Canada, the United States, parts of the Caribbean Sea, and some Atlantic and Pacific islands. See [North American Numbering Plan] (https://en.wikipedia.org/wiki/North_American_Numbering_Plan) for details
    /// </summary>
    areaCode: string

    /// <summary>
    /// Information on a country the phone number belongs to
    /// </summary>
    country: GetCountryInfoNumberParser

    /// <summary>
    /// Dialing format of a phone number
    /// </summary>
    dialable: string

    /// <summary>
    /// Phone number [E.164](https://www.itu.int/rec/T-REC-E.164-201011-I) format
    /// </summary>
    e164: string

    /// <summary>
    /// International format of a phone number
    /// </summary>
    formattedInternational: string

    /// <summary>
    /// Domestic format of a phone number
    /// </summary>
    formattedNational: string

    /// <summary>
    /// One of the numbers to be parsed, passed as a string in response
    /// </summary>
    originalString: string

    /// <summary>
    /// 'True' if the number is in a special format (for example N11 code)
    /// </summary>
    special: boolean

    /// <summary>
    /// Phone number [E.164](https://www.itu.int/rec/T-REC-E.164-201011-I) format without plus sign ('+')
    /// </summary>
    normalized: string

    /// <summary>
    /// Specifies if a phone number is toll free or not
    /// </summary>
    tollFree: boolean

    /// <summary>
    /// Sub-Address. The portion of the number that identifies a subscriber into the subscriber internal (non-public) network.
    /// </summary>
    subAddress: string

    /// <summary>
    /// Subscriber number. The portion of the [E.164](https://www.itu.int/rec/T-REC-E.164-201011-I) number that identifies a subscriber in a network or numbering area.
    /// </summary>
    subscriberNumber: string

    /// <summary>
    /// DTMF (Dual Tone Multi-Frequency) postfix
    /// </summary>
    dtmfPostfix: string
}

export default PhoneNumberInfoNumberParser