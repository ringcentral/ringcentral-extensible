import {PresetInfo, CustomGreetingInfoRequest} from './index';

class GreetingInfo {
  /**
   * Type of a greeting, specifying the case when the greeting is played.
   */
  type?:
    | 'Introductory'
    | 'Announcement'
    | 'ConnectingMessage'
    | 'ConnectingAudio'
    | 'Voicemail'
    | 'Unavailable'
    | 'InterruptPrompt'
    | 'HoldMusic'
    | 'Custom'
    | 'Company'
    | 'BlockedCallersSpecific'
    | 'BlockedCallersAll'
    | 'BlockedNoCallerId'
    | 'BlockedPayPhones'
    | 'StartRecording'
    | 'StopRecording'
    | 'AutomaticRecording';

  /**
   * Usage type of a greeting, specifying if the greeting is applied to user extension or department extension.
   */
  usageType?:
    | 'UserExtensionAnsweringRule'
    | 'ExtensionAnsweringRule'
    | 'DepartmentExtensionAnsweringRule'
    | 'CompanyAnsweringRule'
    | 'CompanyAfterHoursAnsweringRule'
    | 'VoicemailExtensionAnsweringRule'
    | 'AnnouncementExtensionAnsweringRule';

  /**
   */
  preset?: PresetInfo;

  /**
   */
  custom?: CustomGreetingInfoRequest;
}

export default GreetingInfo;
