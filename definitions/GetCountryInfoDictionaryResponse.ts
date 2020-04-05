class GetCountryInfoDictionaryResponse
{
    /// <summary>
    /// Internal identifier of a country
    /// </summary>
    id: string

    /// <summary>
    /// Canonical URI of a country
    /// </summary>
    uri: string

    /// <summary>
    /// Country calling code defined by ITU-T recommendations [E.123](https://www.itu.int/rec/T-REC-E.123-200102-I/en) and [E.164](https://www.itu.int/rec/T-REC-E.164-201011-I)
    /// </summary>
    callingCode: string

    /// <summary>
    /// Emergency calling feature availability/emergency address requirement indicator
    /// </summary>
    emergencyCalling: boolean

    /// <summary>
    /// Country code according to the ISO standard, see [ISO 3166](https://www.iso.org/iso-3166-country-codes.html)
    /// </summary>
    isoCode: string

    /// <summary>
    /// Official name of a country
    /// </summary>
    name: string

    /// <summary>
    /// Determines whether phone numbers are available for a country
    /// </summary>
    numberSelling: boolean

    /// <summary>
    /// Specifies whether login with the phone numbers of this country is enabled or not
    /// </summary>
    loginAllowed: boolean

    /// <summary>
    /// Indicates whether signup/billing is allowed for a country
    /// </summary>
    signupAllowed: boolean

    /// <summary>
    /// Specifies if free phone line for softphone is available for a country or not
    /// </summary>
    freeSoftphoneLine: boolean
}

export default GetCountryInfoDictionaryResponse