import ValidationError from "./ValidationError";

interface SwitchValidated {
  /**
   * Internal identifier of a switch
   */
  id?: string;

  /**
   * Unique identifier of a network switch
   */
  chassisId?: string;

  /**
   * Switch entity extension for better diversity. Should be used together with chassisId.
   */
  port?: string;

  /**
   * Validation result status
   */
  status?: "Valid" | "Invalid";

  /** */
  errors?: ValidationError[];
}

export default SwitchValidated;
