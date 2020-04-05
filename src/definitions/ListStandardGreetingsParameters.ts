class ListStandardGreetingsParameters
{
  /**
   * Indicates the page number to retrieve. Only positive number values are accepted.
   * Default: 1
   */
  page?: number

  /**
   * Indicates the page size (number of items).
   * Default: 100
   */
  perPage?: number

  /**
   * Type of a greeting, specifying the case when the greeting is played
   * Enum: Introductory, Announcement, ConnectingMessage, ConnectingAudio, Voicemail, Unavailable, HoldMusic, Company
   */
  type?: string

  /**
   * Usage type of a greeting, specifying if the greeting is applied for user extension or department extension
   * Enum: UserExtensionAnsweringRule, ExtensionAnsweringRule, DepartmentExtensionAnsweringRule, CompanyAnsweringRule, CompanyAfterHoursAnsweringRule, VoicemailExtensionAnsweringRule, AnnouncementExtensionAnsweringRule
   */
  usageType?: string
}

export default ListStandardGreetingsParameters
