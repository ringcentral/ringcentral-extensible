/**
 * Information on a state this location belongs to
*/
interface LocationStateInfo {
  /**
   * Internal identifier of a state
   */
  id?: string;

  /**
   * Link to a state resource
   * Format: uri
   */
  uri?: string;
}

export default LocationStateInfo;
