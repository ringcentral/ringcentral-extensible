/**
 * Optional. Dialing plan country data. If not specified, then extension home country is applied by default
*/
interface MakeRingOutCoutryInfo {
  /**
   * Dialing plan country identifier
   */
  id?: string;
}

export default MakeRingOutCoutryInfo;
