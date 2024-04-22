import type PronouncedNamePromptInfo from './PronouncedNamePromptInfo';

interface PronouncedNameInfo {
  /**
   * The method used to pronounce the user's name:
   *  - `Default` - default extension name; first and last name specified in user's profile are pronounced using text-to-speech;
   *  - `TextToSpeech` - custom text specified by a user  pronounced using text-to-speech;
   *  - `Recorded` - custom audio uploaded by a user, the name recorded in user's own voice (supported only for extension retrieval).
   */
  type?: 'Default' | 'TextToSpeech' | 'Recorded';

  /**
   * Custom text (for `TextToSpeech` type only)
   */
  text?: string;

  /**
   */
  prompt?: PronouncedNamePromptInfo;
}

export default PronouncedNameInfo;
