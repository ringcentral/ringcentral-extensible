import ApiError from "./ApiError.js";

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
   * Example: YouTube
   */
  serviceProvider?: string;

  /**
   * Livestream status
   * Required
   * Example: Configured
   */
  livestreamStatus?:
    | "Initialized"
    | "Authorized"
    | "Configured"
    | "PublishSetup"
    | "Publishing"
    | "Error"
    | "Paused"
    | "Break"
    | "Deleted"
    | "Completed";

  /**
   * Livestream status
   * Example: Configured
   */
  previousLivestreamStatus?:
    | "Initialized"
    | "Authorized"
    | "Configured"
    | "PublishSetup"
    | "Publishing"
    | "Error"
    | "Paused"
    | "Break"
    | "Deleted"
    | "Completed";

  /**
   * Time at which the session started to publish media to livestream service provider.
   * Format: date-time
   */
  livestreamStartTime?: string;

  /** */
  error?: ApiError;
}

export default SessionLivestreamMinimalModel;
