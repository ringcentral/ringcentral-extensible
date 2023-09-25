/**
 * Various settings which define behavior of this Webinar's Sessions
 */
interface WcsWebinarSettingsModel {
  /**
   * Indicates if recording is enabled (if false all other recording settings cannot be enabled)
   * Default: true
   */
  recordingEnabled?: boolean;

  /**
   * Indicates if recording should start automatically when a Webinar goes live
   */
  autoRecord?: boolean;

  /**
   * Indicates if recording can be shared (this setting is read-only at webinar level)
   * Default: true
   */
  recordingSharingEnabled?: boolean;

  /**
   * Indicates if recording can be downloaded (this setting is read-only at webinar level)
   * Default: true
   */
  recordingDownloadEnabled?: boolean;

  /**
   * DEPRECATED AND REPLACED BY 'pastSessionDeletionEnabled' setting.
   *  Indicates if recording can be deleted (this setting is read-only at webinar level)
   */
  recordingDeletionEnabled?: boolean;

  /**
   * Indicates if deletion of past session along with its artifacts is enabled for Host.
   *  This setting is read-only at webinar level
   */
  pastSessionDeletionEnabled?: boolean;

  /**
   * Indicates if Panelists should be places to waiting room after joining
   */
  panelistWaitingRoom?: boolean;

  /**
   * Indicates if Panelists' video should be 'on' by default
   * Default: true
   */
  panelistVideoEnabled?: boolean;

  /**
   * Indicates if Panelists' screen sharing should be 'on' by default
   * Default: true
   */
  panelistScreenSharingEnabled?: boolean;

  /**
   * Indicates if Panelists can mute/unmute themselves by default
   * Default: true
   */
  panelistMuteControlEnabled?: boolean;

  /**
   * Indicates if Panelists have to be authenticated users
   * Default: Guest
   */
  panelistAuthentication?: 'Guest' | 'AuthenticatedUser' | 'AuthenticatedCoworker';

  /**
   * Indicates if attendees have to be authenticated users
   * Default: Guest
   */
  attendeeAuthentication?: 'Guest' | 'AuthenticatedUser' | 'AuthenticatedCoworker';

  /**
   * Indicates who can access webinar artifacts. Applies to recordings at present.
   *  Applicable to other artifacts such as Q&A, Polls in the future.
   * Default: AuthenticatedUser
   */
  artifactsAccessAuthentication?: 'Guest' | 'AuthenticatedUser' | 'AuthenticatedCoworker';

  /**
   * Indicates if dial-in PSTN audio option is enabled for Panelists
   */
  pstnEnabled?: boolean;

  /**
   * Webinar password. If company-level "passwordEnabled" is true and "password" is null / omitted,
   *  the backend generates the password
   */
  password?: string;

  /**
   * Indicates if Q&A is enabled for the webinar (if false all other Q&A settings cannot be enabled)
   * Default: true
   */
  qnaEnabled?: boolean;

  /**
   * Indicates if anonymous Q&A is enabled for the webinar
   * Default: true
   */
  qnaAnonymousEnabled?: boolean;

  /**
   * Indicates if polls are enabled for the webinar (if false all other polls settings cannot be enabled)
   * Default: true
   */
  pollsEnabled?: boolean;

  /**
   * Indicates if anonymous poll answers are enabled for the webinar
   * Default: true
   */
  pollsAnonymousEnabled?: boolean;

  /**
   * Indicates if a registration is enabled for the webinar (if false all other registration settings are ignored)
   */
  registrationEnabled?: boolean;

  /**
   * URI to redirect users after the webinar
   * Format: uri
   * Example: https://www.acme.com/thankyou
   */
  postWebinarRedirectUri?: string;

  /**
   * Indicates if livestreaming to external streaming provider is enabled
   * Default: true
   */
  externalLivestreamEnabled?: boolean;

  /**
   * Indicate if the moderated Q&A enabled for webinar
   */
  moderatedQnaEnabled?: boolean;
}

export default WcsWebinarSettingsModel;
