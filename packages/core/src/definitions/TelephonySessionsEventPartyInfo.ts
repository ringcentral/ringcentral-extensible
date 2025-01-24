import type CallPartyInfo from "./CallPartyInfo";
import type RecordingInfo from "./RecordingInfo";
import type CallStatusInfo from "./CallStatusInfo";
import type ParkInfo from "./ParkInfo";
import type SipData from "./SipData";
import type UiCallInfo from "./UiCallInfo";

interface TelephonySessionsEventPartyInfo {
  /**
   * Internal identifier of an account
   */
  accountId?: string;

  /**
   * Internal identifier of an extension
   */
  extensionId?: string;

  /**
   * Internal identifier of a party
   */
  id?: string;

  /**
   * Call direction
   */
  direction?: "Inbound" | "Outbound";

  /** */
  to?: CallPartyInfo;

  /** */
  from?: CallPartyInfo;

  /** */
  recordings?: RecordingInfo[];

  /** */
  status?: CallStatusInfo;

  /** */
  park?: ParkInfo;

  /**
   * Specifies if it's a queue call
   */
  queueCall?: boolean;

  /**
   * Specifies if a call was missed by the party
   */
  missedCall?: boolean;

  /**
   * If `true` then the party is not connected to a session voice
   *  conference, `false` means the party is connected to other parties in a
   *  session
   */
  standAlone?: boolean;

  /**
   * Specifies if a call participant is muted or not. **Note:**
   *  If a call is also controlled via Hard phone or RingCentral App (not only
   *  through the API by calling call control methods) then it cannot be fully
   *  muted/unmuted via API only, in this case the action should be duplicated
   *  via Hard phone/RC App interfaces
   */
  muted?: boolean;

  /**
   * Defines party role in Server Side Conference
   */
  conferenceRole?: "Host" | "Participant";

  /** */
  sipData?: SipData;

  /** */
  uiCallInfo?: UiCallInfo;
}

export default TelephonySessionsEventPartyInfo;
