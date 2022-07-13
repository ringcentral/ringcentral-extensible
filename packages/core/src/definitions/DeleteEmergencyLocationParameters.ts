/**
 * Query parameters for operation deleteEmergencyLocation
*/
interface DeleteEmergencyLocationParameters {
  /**
   * Internal identifier of a location that should be used instead of a deleted one
   */
  newLocationId?: string;

  /**
   * Flag indicating that validation of emergency location(s) is required before deletion
   */
  validateOnly?: boolean;
}

export default DeleteEmergencyLocationParameters;
