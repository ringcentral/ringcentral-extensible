import type BridgePinsWithoutPstn from "./BridgePinsWithoutPstn.js";
import type BridgeRequestSecurity from "./BridgeRequestSecurity.js";
import type BridgePreferences from "./BridgePreferences.js";

interface UpdateBridgeRequest {
  /**
   * Custom name of a bridge
   * Example: Weekly Meeting with Joseph
   */
  name?: string;

  /**
   */
  pins?: BridgePinsWithoutPstn;

  /**
   */
  security?: BridgeRequestSecurity;

  /**
   */
  preferences?: BridgePreferences;
}

export default UpdateBridgeRequest;
