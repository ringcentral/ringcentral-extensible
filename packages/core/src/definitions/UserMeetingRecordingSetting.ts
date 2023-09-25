/**
 * Meeting recording settings locked on account level
 */
interface UserMeetingRecordingSetting {
  /**
   * Allows hosts and participants to record a meeting to a local file
   */
  localRecording?: boolean;

  /**
   * Allows hosts to record and save a meeting/webinar in the cloud
   */
  cloudRecording?: boolean;

  /**
   * Allows to record active speaker with the shared screen
   */
  recordSpeakerView?: boolean;

  /**
   * Allows to record gallery view with the shared screen
   */
  recordGalleryView?: boolean;

  /**
   * Allows to record an audio-only file
   */
  recordAudioFile?: boolean;

  /**
   * Allows to save chat text from a meeting
   */
  saveChatText?: boolean;

  /**
   * Allows to show timestamp on video
   */
  showTimestamp?: boolean;

  /**
   * Automatic recording (local/cloud/none) of meetings as they start
   * Default: local
   */
  autoRecording?: 'local' | 'cloud' | 'none';

  /**
   * Automatic deletion of cloud recordings
   * Default: false
   */
  autoDeleteCmr?: string;

  /**
   * A specified number of days for automatic deletion of cloud recordings, the value range is 1-60
   * Format: int32
   */
  autoDeleteCmrDays?: number;
}

export default UserMeetingRecordingSetting;
