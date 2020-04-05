import GetCountryInfoState from './GetCountryInfoState'

class GetStateInfoResponse
{
    /**
     * Internal identifier of a state
     */
    id: string

    /**
     * Canonical URI of a state
     */
    uri: string

    /**
     * Information on a country the state belongs to
     */
    country: GetCountryInfoState

    /**
     * Short code for a state (2-letter usually)
     */
    isoCode: string

    /**
     * Official name of a state
     */
    name: string
}

export default GetStateInfoResponse