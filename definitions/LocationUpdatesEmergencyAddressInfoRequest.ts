class LocationUpdatesEmergencyAddressInfoRequest
{
    /// <summary>
    /// Country name
    /// </summary>
    country: string

    /// <summary>
    /// Internal identifier of a country
    /// </summary>
    countryId: string

    /// <summary>
    /// ISO code of a country
    /// </summary>
    countryIsoCode: string

    /// <summary>
    /// Full name of a country
    /// </summary>
    countryName: string

    /// <summary>
    /// Customer name
    /// </summary>
    customerName: string

    /// <summary>
    /// State/Province name. Mandatory for the USA, the UK and Canada
    /// </summary>
    state: string

    /// <summary>
    /// Internal identifier of a state
    /// </summary>
    stateId: string

    /// <summary>
    /// ISO code of a state
    /// </summary>
    stateIsoCode: string

    /// <summary>
    /// Full name of a state
    /// </summary>
    stateName: string

    /// <summary>
    /// City name
    /// </summary>
    city: string

    /// <summary>
    /// First line address
    /// </summary>
    street: string

    /// <summary>
    /// Second line address (apartment, suite, unit, building, floor, etc.)
    /// </summary>
    street2: string

    /// <summary>
    /// Postal (Zip) code
    /// </summary>
    zip: string
}

export default LocationUpdatesEmergencyAddressInfoRequest