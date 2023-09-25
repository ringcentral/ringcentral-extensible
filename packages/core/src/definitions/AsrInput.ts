import type SpeechContextPhrasesInput from './SpeechContextPhrasesInput';

interface AsrInput {
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
   * Indicates that the input audio is multi-channel and each channel has a separate speaker.
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
   * Example: enrollmentId1,enrollmentId2
   */
  enrollmentIds?: string[];

  /**
   * Apply voice activity detection.
   */
  enableVoiceActivityDetection?: boolean;

  /**
   * Enables Smart Punctuation API.
   */
  enablePunctuation?: boolean;

  /**
   * Tags each word corresponding to the speaker.
   */
  enableSpeakerDiarization?: boolean;

  /**
   * Indicates the words/phrases that will be used for boosting the transcript. This can help to boost accuracy for cases like Person Names, Company names etc.
   */
  speechContexts?: SpeechContextPhrasesInput[];
}

export default AsrInput;
