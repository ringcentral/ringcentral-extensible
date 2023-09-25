/**
 * Controls whether participants can start and pause recording
 */
interface EveryoneCanControl {
  /**
   * Controls whether preference is enabled
   * Example: true
   */
  enabled?: boolean;

  /**
   * Describes whether preference is locked on Service Web
   */
  locked?: boolean;
}

export default EveryoneCanControl;
