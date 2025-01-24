import type BridgePinsWithoutPstn from "./BridgePinsWithoutPstn";
import type BridgeRequestSecurity from "./BridgeRequestSecurity";
import type BridgePreferences from "./BridgePreferences";

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
