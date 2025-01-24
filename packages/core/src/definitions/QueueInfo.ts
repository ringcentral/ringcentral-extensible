import type TransferInfo from "./TransferInfo";
import type FixedOrderAgents from "./FixedOrderAgents";
import type UnconditionalForwardingInfo from "./UnconditionalForwardingInfo";

/**
 * Queue settings applied for department (call queue) extension type,
 * with the 'AgentQueue' value specified as a call handling action
 */
interface QueueInfo {
  /**
   * Specifies how calls are transferred to group members
   */
  transferMode?: "Rotating" | "Simultaneous" | "FixedOrder";

  /**
   * Call transfer information
   */
  transfer?: TransferInfo[];

  /**
   * Specifies the type of action to be taken if: members are available
   *  but no one answers, or all members are busy/unavailable. This option is
   *  available for Business hours only. For simultaneous transfer mode only
   *  'WaitPrimaryMembers' and 'WaitPrimaryAndOverflowMembers' are supported
   */
  noAnswerAction?:
    | "WaitPrimaryMembers"
    | "WaitPrimaryAndOverflowMembers"
    | "Voicemail"
    | "TransferToExtension"
    | "UnconditionalForwarding";

  /**
   * Information on a call forwarding rule
   */
  fixedOrderAgents?: FixedOrderAgents[];

  /**
   * Connecting audio interruption mode
   */
  holdAudioInterruptionMode?: "Never" | "WhenMusicEnds" | "Periodically";

  /**
   * Connecting audio interruption message period in seconds
   * Format: int32
   */
  holdAudioInterruptionPeriod?: number;

  /**
   * Specifies the type of action to be taken after the hold time
   *  (waiting for an available call queue member) expires. If 'TransferToExtension'
   *  option is selected, the extension specified in `transfer` field is used.
   *  The default value is `Voicemail`
   * Default: Voicemail
   */
  holdTimeExpirationAction?:
    | "TransferToExtension"
    | "UnconditionalForwarding"
    | "Voicemail";

  /**
   * Maximum time in seconds to wait for a call queue member before trying the next member
   * Format: int32
   */
  agentTimeout?: number;

  /**
   * Minimum post-call wrap up time in seconds before agent status
   *  is automatically set; the value range is from 0 to 300 sec.
   * Maximum: 300
   * Format: int32
   * Default: 15
   */
  wrapUpTime?: number;

  /**
   * Maximum hold time in seconds to wait for an available call queue member
   * Format: int32
   */
  holdTime?: number;

  /**
   * Maximum count of callers on hold; the limitation is 25 callers
   * Maximum: 25
   * Format: int32
   */
  maxCallers?: number;

  /**
   * Specifies the type of action to be taken if count of callers on hold exceeds the supported maximum
   */
  maxCallersAction?:
    | "Voicemail"
    | "Announcement"
    | "TransferToExtension"
    | "UnconditionalForwarding";

  /** */
  unconditionalForwarding?: UnconditionalForwardingInfo[];
}

export default QueueInfo;
