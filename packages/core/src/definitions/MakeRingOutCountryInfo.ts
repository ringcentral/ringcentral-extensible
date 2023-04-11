/**
 * Optional. Dialing plan country data. If not specified, then an extension
 * home country is applied by default
 *
*/
interface MakeRingOutCountryInfo {
  /**
   * Dialing plan country identifier
   */
  id?: string;
}

export default MakeRingOutCountryInfo;
