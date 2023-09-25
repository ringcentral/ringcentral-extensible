interface IdentifyInput {
  /**
   * Publicly facing uri
   * Format: uri
   */
  contentUri?: string;

  /**
   * The encoding of the original audio
   * Required
   * Example: Wav
   */
  encoding?: 'Mpeg' | 'Mp4' | 'Wav' | 'Webm' | 'Webp' | 'Aac' | 'Avi' | 'Ogg';

  /**
   * Language spoken in the audio file.
   * Required
   * Example: en-US
   */
  languageCode?: string;

  /**
   * Source of the audio file eg: Phone, RingCentral, GoogleMeet, Zoom etc
   * Example: RingCentral
   */
  source?: string;

  /**
   * Type of the audio
   * Example: CallCenter
   */
  audioType?: 'CallCenter' | 'Meeting' | 'EarningsCalls' | 'Interview' | 'PressConference' | 'Voicemail';

  /**
   * Set of enrolled speakers to be identified from the media.
   * Required
   * Example: enrollmentId1,enrollmentId2
   */
  enrollmentIds?: string[];

  /**
   * Apply voice activity detection.
   */
  enableVoiceActivityDetection?: boolean;
}

export default IdentifyInput;
