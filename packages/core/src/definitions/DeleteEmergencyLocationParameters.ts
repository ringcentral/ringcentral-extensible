/**
 * Query parameters for operation deleteEmergencyLocation
*/
interface DeleteEmergencyLocationParameters {
  /**
   * Flag indicating that validation of emergency location(s) is required
 *  before deletion
   */
  validateOnly?: boolean;

  /**
   * Internal identifier of an emergency response location
 *  that should be used instead of a deleted one.
   */
  newLocationId?: string;
}

export default DeleteEmergencyLocationParameters;
