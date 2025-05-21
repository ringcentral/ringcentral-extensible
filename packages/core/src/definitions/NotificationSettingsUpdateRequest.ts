import VoicemailsInfo from "./VoicemailsInfo.js";
import InboundFaxesInfo from "./InboundFaxesInfo.js";
import OutboundFaxesInfo from "./OutboundFaxesInfo.js";
import InboundTextsInfo from "./InboundTextsInfo.js";
import MissedCallsInfo from "./MissedCallsInfo.js";

interface NotificationSettingsUpdateRequest {
  /**
   * Canonical URI of notifications settings resource
   * Format: uri
   */
  uri?: string;

  /**
   * List of notification recipient email addresses. Should not be empty
   *  if 'includeManagers' parameter is set to false
   */
  emailAddresses?: string[];

  /**
   * List of notification recipient email addresses
   */
  smsEmailAddresses?: string[];

  /**
   * Specifies notifications settings mode. If `true` then advanced
   *  mode is on, it allows using different emails and/or phone numbers for
   *  each notification type. If `false` then basic mode is on. Advanced mode
   *  settings are returned in both modes, if specified once, but if basic mode
   *  is switched on, they are not applied
   */
  advancedMode?: boolean;

  /** */
  voicemails?: VoicemailsInfo;

  /** */
  inboundFaxes?: InboundFaxesInfo;

  /** */
  outboundFaxes?: OutboundFaxesInfo;

  /** */
  inboundTexts?: InboundTextsInfo;

  /** */
  missedCalls?: MissedCallsInfo;

  /**
   * Specifies if managers' emails are included in the list of emails to
   *  which notifications are sent. If not specified, then the value is `true`
   * Default: true
   */
  includeManagers?: boolean;
}

export default NotificationSettingsUpdateRequest;
