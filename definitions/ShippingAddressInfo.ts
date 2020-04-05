class ShippingAddressInfo
{
    /// <summary>
    /// Name of a primary contact person (receiver)
    /// </summary>
    customerName: string

    /// <summary>
    /// Name of an additional contact person. Should be specified for countries except the US, Canada, the UK and Australia.
    /// </summary>
    additionalCustomerName: string

    /// <summary>
    /// Email of a primary contact person (receiver). Should be specified for countries except the US, Canada, the UK and Australia.
    /// </summary>
    customerEmail: string

    /// <summary>
    /// Email of an additional contact person. Should be specified for countries except the US, Canada, the UK and Australia.
    /// </summary>
    additionalCustomerEmail: string

    /// <summary>
    /// Phone number of a primary contact person (receiver). Should be specified for countries except the US, Canada, the UK and Australia
    /// </summary>
    customerPhone: string

    /// <summary>
    /// Phone number of an additional contact person. Should be specified for countries except the US, Canada, the UK & Australia.
    /// </summary>
    additionalCustomerPhone: string

    /// <summary>
    /// Street address, line 1 - street address, P.O. box, company name, c/o
    /// </summary>
    street: string

    /// <summary>
    /// Street address, line 2 - apartment, suite, unit, building, floor, etc.
    /// </summary>
    street2: string

    /// <summary>
    /// City name
    /// </summary>
    city: string

    /// <summary>
    /// State/province name
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
    /// Internal identifier of a country
    /// </summary>
    countryId: string

    /// <summary>
    /// ISO code of a country
    /// </summary>
    countryIsoCode: string

    /// <summary>
    /// Country name
    /// </summary>
    country: string

    /// <summary>
    /// Full name of a country
    /// </summary>
    countryName: string

    /// <summary>
    /// Zip code
    /// </summary>
    zip: string

    /// <summary>
    /// National taxpayer identification number. Should be specified for Brazil (CNPJ/CPF number) and Argentina (CUIT number).
    /// </summary>
    taxId: string
}

export default ShippingAddressInfo