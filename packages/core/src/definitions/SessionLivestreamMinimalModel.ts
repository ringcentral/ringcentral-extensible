import ApiError from './ApiError';

interface SessionLivestreamMinimalModel {
  /**
   * Identifier of the livestream
   * Required
   * Example: 40740e06-4eec-4458-a86e-8578e192274q
   */
  livestreamId?: string;

  /**
   * Name of the livestreaming service provider
   * Required
   * Example: YoutTube
   */
  serviceProvider?: string;

  /**
   * Last known state of the livestream as notified by Webinar Livestreaming Controller Service (WLCS).
 *  Value may not be consistent with latest state, especially for livestream associated with OAuth2.0 based service providers.
 *  Thus, state must be obtained directly from WLCS
   * Required
   * Example: Initialized
   */
  livestreamStatus?: ('Initialized' | 'Authorized' | 'Configured' | 'PublishSetup' | 'Publishing' | 'Paused' | 'Error' | 'Break' | 'Deleted' | 'Completed');

  /**
   * Last known state of the livestream as notified by Webinar Livestreaming Controller Service (WLCS).
 *  Value may not be consistent with latest state, especially for livestream associated with OAuth2.0 based service providers.
 *  Thus, state must be obtained directly from WLCS
   * Example: Initialized
   */
  previousLivestreamStatus?: ('Initialized' | 'Authorized' | 'Configured' | 'PublishSetup' | 'Publishing' | 'Paused' | 'Error' | 'Break' | 'Deleted' | 'Completed');

  /**
   * Time at which the session started to publish media to livestream service provider.
   * Format: date-time
   */
  livestreamStartTime?: string;

  /**
   */
  error?: ApiError;
}

export default SessionLivestreamMinimalModel;
