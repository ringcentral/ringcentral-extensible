import LocationStateInfo from './LocationStateInfo'

class LocationInfo
{
    /// <summary>
    /// Canonical URI of a location
    /// </summary>
    uri: string

    /// <summary>
    /// Area code of the location
    /// </summary>
    areaCode: string

    /// <summary>
    /// Official name of the city, belonging to the certain state
    /// </summary>
    city: string

    /// <summary>
    /// Area code of the location (3-digit usually), according to the NANP number format, that can be summarized as NPA-NXX-xxxx and covers Canada, the United States, parts of the Caribbean Sea, and some Atlantic and Pacific islands. See for details North American Numbering Plan
    /// </summary>
    npa: string

    /// <summary>
    /// Central office code of the location, according to the NANP number format, that can be summarized as NPA-NXX-xxxx and covers Canada, the United States, parts of the Caribbean Sea, and some Atlantic and Pacific islands. See for details North American Numbering Plan
    /// </summary>
    nxx: string

    /// <summary>
    /// Information on the state this location belongs to
    /// </summary>
    state: LocationStateInfo
}

export default LocationInfo