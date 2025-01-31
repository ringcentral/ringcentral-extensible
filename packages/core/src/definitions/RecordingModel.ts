import ApiError from "./ApiError.js";

interface RecordingModel {
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
   * Example: 2023-10-01T10:05:00.000Z
   */
  sharedUriExpirationTime?: string;
}

export default RecordingModel;
