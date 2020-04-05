import GetCountryInfoState from './GetCountryInfoState'

class GetStateInfoResponse
{
    /// <summary>
    /// Internal identifier of a state
    /// </summary>
    id: string

    /// <summary>
    /// Canonical URI of a state
    /// </summary>
    uri: string

    /// <summary>
    /// Information on a country the state belongs to
    /// </summary>
    country: GetCountryInfoState

    /// <summary>
    /// Short code for a state (2-letter usually)
    /// </summary>
    isoCode: string

    /// <summary>
    /// Official name of a state
    /// </summary>
    name: string
}

export default GetStateInfoResponse