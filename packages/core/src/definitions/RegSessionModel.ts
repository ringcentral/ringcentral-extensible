import RegSessionModelSettings from "./RegSessionModelSettings";

interface RegSessionModel {
  /**
   * ID of the session
   * Required
   * Example: 123456789
   */
  id?: string;

  /**
   * Status of the registration
   * Required
   * Example: Open
   */
  registrationStatus?: "Open" | "Closed";

  /**
   * The URI of the registration landing page
   * Format: uri
   * Example: https://abcde12345.webinar.ringcentral.com/register
   */
  registrationPageUri?: string;

  /**
   * The URI of the branding descriptor
   * Format: uri
   * Example: https://abcde12345.webinar.ringcentral.com/branding
   */
  brandingDescriptorUri?: string;

  /**
   * The current number of registrants
   * Required
   * Format: int32
   * Example: 10
   */
  registrantCount?: number;

  /**
   * The current number of post webinar registrants
   * Format: int32
   * Example: 10
   */
  postWebinarRegistrantCount?: number;

  /**
   * Indicates that there are non-test registrants
   * Required
   * Example: true
   */
  hasRealRegistrants?: boolean;

  /**
   * Sequence number for iCalendar email attachments
   * Format: int32
   */
  icalendarSequence?: number;

  /** */
  settings?: RegSessionModelSettings;
}

export default RegSessionModel;
