import {
  VoicemailsInfo,
  InboundFaxesInfo,
  OutboundFaxesInfo,
  InboundTextsInfo,
  MissedCallsInfo,
} from './index';

class NotificationSettingsUpdateRequest {
  /**
   * List of notification recipient email addresses
   */
  emailAddresses?: string[];

  /**
   * List of notification recipient email addresses
   */
  smsEmailAddresses?: string[];

  /**
   * Specifies notifications settings mode. If 'True' then advanced mode is on, it allows using different emails and/or phone numbers for each notification type. If 'False' then basic mode is on. Advanced mode settings are returned in both modes, if specified once, but if basic mode is switched on, they are not applied
   */
  advancedMode?: boolean;

  /**
   */
  voicemails?: VoicemailsInfo;

  /**
   */
  inboundFaxes?: InboundFaxesInfo;

  /**
   */
  outboundFaxes?: OutboundFaxesInfo;

  /**
   */
  inboundTexts?: InboundTextsInfo;

  /**
   */
  missedCalls?: MissedCallsInfo;
}

export default NotificationSettingsUpdateRequest;
