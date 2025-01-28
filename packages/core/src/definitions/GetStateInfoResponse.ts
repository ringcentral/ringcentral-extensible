import CountryInfoMinimalModel from "./CountryInfoMinimalModel";

interface GetStateInfoResponse {
  /**
   * Internal identifier of a state
   */
  id?: string;

  /**
   * Canonical URI of a state
   * Format: uri
   */
  uri?: string;

  /** */
  country?: CountryInfoMinimalModel;

  /**
   * Short code for a state (2-letter usually)
   */
  isoCode?: string;

  /**
   * Official name of a state
   */
  name?: string;
}

export default GetStateInfoResponse;
