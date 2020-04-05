class EmergencyLocationAddressInfoRequest
{
    /**
     * Country name
     */
    country: string

    /**
     * State/Province name. Mandatory for the USA, the UK and Canada
     */
    state: string

    /**
     * City name
     */
    city: string

    /**
     * First line address
     */
    street: string

    /**
     * Second line address (apartment, suite, unit, building, floor, etc.)
     */
    street2: string

    /**
     * Postal (Zip) code
     */
    zip: string
}

export default EmergencyLocationAddressInfoRequest