import PartyInfo from "./PartyInfo.js";
import OwnerInfo from "./OwnerInfo.js";
import CallStatusInfo from "./CallStatusInfo.js";

interface SuperviseCallSessionResponse {
  /** */
  from?: PartyInfo;

  /** */
  to?: PartyInfo;

  /**
   * Direction of a call
   */
  direction?: "Outbound" | "Inbound";

  /**
   * Internal identifier of a party that monitors a call
   */
  id?: string;

  /**
   * Internal identifier of an account that monitors a call
   */
  accountId?: string;

  /**
   * Internal identifier of an extension that monitors a call
   */
  extensionId?: string;

  /**
   * Specifies if a call participant is muted or not. **Note:** If a call is also controlled via Hard phone or RingCentral App (not only through the API by calling call control methods) then it cannot be fully muted/unmuted via API only, in this case the action should be duplicated via Hard phone/RC App interfaces
   */
  muted?: boolean;

  /** */
  owner?: OwnerInfo;

  /**
   * If `true` then the party is not connected to a session voice conference, `false` means the party is connected to other parties in a session
   */
  standAlone?: boolean;

  /** */
  status?: CallStatusInfo;
}

export default SuperviseCallSessionResponse;
