import PageNavigationModel from "./PageNavigationModel.js";
import EnumeratedPagingModel from "./EnumeratedPagingModel.js";

interface DictionaryGreetingInfo {
  /**
   * Internal identifier of a greeting
   */
  id?: string;

  /**
   * Link to a greeting
   * Format: uri
   */
  uri?: string;

  /**
   * Name of a greeting
   */
  name?: string;

  /**
   * Usage type of greeting, specifying if the greeting is applied for user extension or department (call queue) extension.
   */
  usageType?:
    | "UserExtensionAnsweringRule"
    | "ExtensionAnsweringRule"
    | "DepartmentExtensionAnsweringRule"
    | "BlockedCalls"
    | "CallRecording"
    | "CompanyAnsweringRule"
    | "CompanyAfterHoursAnsweringRule"
    | "LimitedExtensionAnsweringRule"
    | "VoicemailExtensionAnsweringRule"
    | "AnnouncementExtensionAnsweringRule"
    | "SharedLinesGroupAnsweringRule";

  /**
   * Text of a greeting, if any
   */
  text?: string;

  /**
   * Link to a greeting content (audio file), if any
   * Format: uri
   */
  contentUri?: string;

  /**
   * Type of greeting, specifying the case when the greeting is played.
   */
  type?:
    | "Introductory"
    | "Announcement"
    | "AutomaticRecording"
    | "BlockedCallersAll"
    | "BlockedCallersSpecific"
    | "BlockedNoCallerId"
    | "BlockedPayPhones"
    | "ConnectingMessage"
    | "ConnectingAudio"
    | "StartRecording"
    | "StopRecording"
    | "Voicemail"
    | "Unavailable"
    | "InterruptPrompt"
    | "HoldMusic"
    | "Company";

  /**
   * Category of a greeting, specifying data form. The category value 'None' specifies that greetings of a certain type ('Introductory', 'ConnectingAudio', etc.) are switched off for an extension = ['Music', 'Message', 'RingTones', 'None']
   */
  category?: "Music" | "Message" | "RingTones" | "None";

  /** */
  navigation?: PageNavigationModel;

  /** */
  paging?: EnumeratedPagingModel;
}

export default DictionaryGreetingInfo;
