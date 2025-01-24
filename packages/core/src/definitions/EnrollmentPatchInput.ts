interface EnrollmentPatchInput {
  /**
   * The encoding of the original audio
   * Required
   * Example: Wav
   */
  encoding?: "Mpeg" | "Mp4" | "Wav" | "Webm" | "Webp" | "Aac" | "Avi" | "Ogg";

  /**
   * Language spoken in the audio file.
   * Example: en-US
   */
  languageCode?: string;

  /**
   * Base64-encoded audio file data.
   * Required
   * Example: base64EncodedAudioInput
   */
  content?: string;
}

export default EnrollmentPatchInput;
