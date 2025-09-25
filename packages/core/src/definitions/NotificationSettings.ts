import VoicemailsInfo from "./VoicemailsInfo.js";
import InboundFaxesInfo from "./InboundFaxesInfo.js";
import OutboundFaxesInfo from "./OutboundFaxesInfo.js";
import InboundTextsInfo from "./InboundTextsInfo.js";
import MissedCallsInfo from "./MissedCallsInfo.js";
import EmailRecipientInfo from "./EmailRecipientInfo.js";

interface NotificationSettings {
  /**
   * Canonical URI of notifications settings resource
   * Format: uri
   */
  uri?: string;

  /**
   * The parameter contains the list of phone Numbers which should be used for SMS notifications sending
   *  (if advanced mode disabled)
   */
  smsPhoneNumbers?: string[];

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
   * List of extensions specified as email notification recipients.
   *  Returned only for call queues where queue managers are assigned as user
   *  extensions.
   */
  emailRecipients?: EmailRecipientInfo[];

  /**
   * List of notification recipient email addresses
   */
  emailAddresses?: string[];

  /**
   * Specifies if managers' emails are included in the list of emails to which
   *  notifications are sent
   */
  includeManagers?: boolean;

  /**
   * Specifies if sms recipients' emails are included in the list of emails to which
   *  notifications are sent
   */
  includeSmsRecipients?: boolean;

  /**
   * List of sms recipients specified for call queue. Returned only for call queue extension
   */
  smsRecipients?: EmailRecipientInfo[];

  /**
   * List of notification recipient email addresses
   */
  smsEmailAddresses?: string[];
}

export default NotificationSettings;
