import CountryInfo from './CountryInfo'

class BrandInfo
{
    /// <summary>
    /// Internal identifier of a brand
    /// </summary>
    id: string

    /// <summary>
    /// Brand name, for example  RingCentral UK ,  ClearFax
    /// </summary>
    name: string

    /// <summary>
    /// Home country information
    /// </summary>
    homeCountry: CountryInfo
}

export default BrandInfo