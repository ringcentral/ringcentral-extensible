/**
 * Query parameters for operation listStandardGreetings
*/
interface ListStandardGreetingsParameters {
  /**
   * The number of the result set page to display
   * Maximum: 1000
   * Minimum: 1
   * Format: int32
   * Example: 1
   * Default: 1
   */
  page?: number;

  /**
   * The number of items per page. If provided value in the request
 *  is greater than a maximum, the maximum value is applied
   * Maximum: 1000
   * Minimum: 1
   * Format: int32
   * Example: 100
   * Default: 100
   */
  perPage?: number;

  /**
   * Type of a greeting, specifying the case when the greeting is played
   */
  type?: ('Introductory' | 'Announcement' | 'ConnectingMessage' | 'ConnectingAudio' | 'Voicemail' | 'Unavailable' | 'HoldMusic' | 'Company');

  /**
   * Usage type of a greeting, specifying if the greeting is applied for user extension or department (call queue) extension
   */
  usageType?: ('UserExtensionAnsweringRule' | 'ExtensionAnsweringRule' | 'DepartmentExtensionAnsweringRule' | 'CompanyAnsweringRule' | 'CompanyAfterHoursAnsweringRule' | 'VoicemailExtensionAnsweringRule' | 'AnnouncementExtensionAnsweringRule' | 'SharedLinesGroupAnsweringRule');
}

export default ListStandardGreetingsParameters;
