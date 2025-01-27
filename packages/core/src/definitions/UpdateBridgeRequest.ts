import BridgePinsWithoutPstn from "./BridgePinsWithoutPstn.js";
import BridgeRequestSecurity from "./BridgeRequestSecurity.js";
import BridgePreferences from "./BridgePreferences.js";

interface UpdateBridgeRequest {
  /**
   * Custom name of a bridge
   * Example: Weekly Meeting with Joseph
   */
  name?: string;

  /** */
  pins?: BridgePinsWithoutPstn;

  /** */
  security?: BridgeRequestSecurity;

  /** */
  preferences?: BridgePreferences;
}

export default UpdateBridgeRequest;
