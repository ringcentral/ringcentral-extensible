class GetCountryInfoNumberParser
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
    /// Country calling code defined by ITU-T recommendations E.123 and E.164, see Calling Codes
    /// </summary>
    callingCode: string

    /// <summary>
    /// Emergency calling feature availability/emergency address requirement indicator
    /// </summary>
    emergencyCalling: boolean

    /// <summary>
    /// Country code according to the ISO standard, see ISO 3166
    /// </summary>
    isoCode: string

    /// <summary>
    /// Official name of a country
    /// </summary>
    name: string
}

export default GetCountryInfoNumberParser