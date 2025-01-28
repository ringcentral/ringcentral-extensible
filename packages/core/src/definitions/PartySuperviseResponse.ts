import PartyInfo from "./PartyInfo";
import OwnerInfo from "./OwnerInfo";
import CallStatusInfo from "./CallStatusInfo";

interface PartySuperviseResponse {
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
   * Specifies if a call party is muted
   */
  muted?: boolean;

  /** */
  owner?: OwnerInfo;

  /**
   * If `true` then the party is not connected to a session voice
   *  conference, `false` means the party is connected to other parties in a
   *  session
   */
  standAlone?: boolean;

  /** */
  status?: CallStatusInfo;
}

export default PartySuperviseResponse;
