interface DiarizeInput {
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
  encoding?: "Mpeg" | "Mp4" | "Wav" | "Webm" | "Webp" | "Aac" | "Avi" | "Ogg";

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
  audioType?:
    | "CallCenter"
    | "Meeting"
    | "EarningsCalls"
    | "Interview"
    | "PressConference"
    | "Voicemail";

  /**
   * Set to True if the input audio is multi-channel and each channel has a separate speaker.
   */
  separateSpeakerPerChannel?: boolean;

  /**
   * Number of speakers in the file, omit parameter if unknown
   * Format: int32
   * Example: 2
   */
  speakerCount?: number;

  /**
   * Optional set of speakers to be identified from the call.
   * Example: speakerId1,speakerId2
   */
  speakerIds?: string[];

  /**
   * Apply voice activity detection.
   */
  enableVoiceActivityDetection?: boolean;
}

export default DiarizeInput;
