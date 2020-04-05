class EmergencyLocationAddressInfoRequest
{
    /// <summary>
    /// Country name
    /// </summary>
    country: string

    /// <summary>
    /// State/Province name. Mandatory for the USA, the UK and Canada
    /// </summary>
    state: string

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

export default EmergencyLocationAddressInfoRequest