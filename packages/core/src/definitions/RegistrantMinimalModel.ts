interface RegistrantMinimalModel {
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
}

export default RegistrantMinimalModel;
