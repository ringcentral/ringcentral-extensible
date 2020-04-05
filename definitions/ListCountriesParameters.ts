class ListCountriesParameters
{
    /// <summary>
    /// Specifies whether login with the phone numbers of this country is enabled or not
    /// </summary>
    loginAllowed: boolean

    /// <summary>
    /// Indicates whether signup/billing is allowed for a country. If not specified all countries are returned (according to other filters specified if any)
    /// </summary>
    signupAllowed: boolean

    /// <summary>
    /// Specifies if RingCentral sells phone numbers of this country
    /// </summary>
    numberSelling: boolean

    /// <summary>
    /// Indicates the page number to retrieve. Only positive number values are accepted
    /// Default: 1
    /// </summary>
    page: number

    /// <summary>
    /// Indicates the page size (number of items)
    /// Default: 100
    /// </summary>
    perPage: number

    /// <summary>
    /// Specifies if free phone line for softphone is available for a country or not
    /// </summary>
    freeSoftphoneLine: boolean
}

export default ListCountriesParameters