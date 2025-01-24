import type ValidationError from "./ValidationError";

interface WirelessPointValidated {
  /**
   * Internal identifier of a wireless point
   */
  id?: string;

  /**
   * Unique 48-bit identifier of the wireless access point that
   *  follows MAC address conventions
   */
  bssid?: string;

  /**
   * Validation result status
   */
  status?: "Valid" | "Invalid";

  /** */
  errors?: ValidationError[];
}

export default WirelessPointValidated;
