import ApiError from "./ApiError.js";

interface RecordingExtendedModel {
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
   * Recording status
   * Required
   * Example: Available
   */
  status?: "Processing" | "Available" | "Failed" | "Purged";

  /** */
  failureReason?: ApiError;

  /**
   * Recording duration in seconds
   * Minimum: 1
   * Format: int32
   * Example: 3600
   */
  duration?: number;

  /**
   * Indicates if Host or Admin has shared a recording.
   *  Can be set to true only then recording status is 'Available'.
   * Example: true
   */
  shared?: boolean;

  /**
   * Time after which recording shared link cannot be accessed by recipients.
   * Format: date-time
   * Example: Sun Oct 01 2023 03:05:00 GMT-0700 (Pacific Daylight Time)
   */
  sharedUriExpirationTime?: string;

  /**
   * Shared URI of the recording. If a password was required to join a webinar, the URI should contain the password encoded
   * Required
   * Format: uri
   * Example: https://v.ringcentral.com/w/a/recording/de7yd8ew7yfsdfjh899843rgj?pw=a1b2c3d4
   */
  recordingSharedUri?: string;
}

export default RecordingExtendedModel;
