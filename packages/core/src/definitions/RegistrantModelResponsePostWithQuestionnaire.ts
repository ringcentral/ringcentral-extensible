import RegAnswerModel from "./RegAnswerModel";

interface RegistrantModelResponsePostWithQuestionnaire {
  /**
   * Internal object ID
   * Example: 78654321
   */
  id?: string;

  /**
   * Object creation time
   * Required
   * Format: date-time
   */
  creationTime?: string;

  /**
   * Object last modification time
   * Required
   * Format: date-time
   */
  lastModifiedTime?: string;

  /**
   * First (given) name
   * Required
   * Example: John
   */
  firstName?: string;

  /**
   * Last (family) name
   * Required
   * Example: Doe
   */
  lastName?: string;

  /**
   * User's contact email
   * Required
   * Format: email
   * Example: john.doe@example.com
   */
  email?: string;

  /**
   * The personalized URI for this registrant to join the Webinar
   * Format: uri
   * Example: https://v.ringcentral.com/w/a/join/iuyef77fsj473wn10ashjfk34
   */
  joinUri?: string;

  /**
   * The personalized URI for this registrant to cancel the registration
   * Format: uri
   * Example: https://abcde12345.webinar.ringcentral.com/register?jlt=iuyef77fsj473wn10ashjfk34&action=cancel
   */
  cancellationUri?: string;

  /**
   * Indicates if the registrant was registered to on-demand webinar
   */
  registeredPostWebinar?: boolean;

  /**
   * Visitor ID passed from registration page
   */
  visitorId?: string;

  /**
   * ID of a registrant passed from external system
   */
  externalId?: string;

  /**
   * Registration time (can be earlier than "creationTime" due to indirect persistence)
   * Format: date-time
   */
  registrationTime?: string;

  /**
   * IP address of the registrant's user agent
   * Format: ipv4
   */
  ipAddress?: string;

  /**
   * Registration channel source (coming from registration URI)
   */
  source?: string;

  /**
   * ID of session participant (from Runtime Service - if this registrant attended the webinar)
   */
  participantId?: string;

  /**
   * Answers on custom registration questions
   */
  questionnaire?: RegAnswerModel[];

  /**
   * Sequence number for iCalendar email attachments
   * Format: int32
   */
  icalendarSequence?: number;
}

export default RegistrantModelResponsePostWithQuestionnaire;
