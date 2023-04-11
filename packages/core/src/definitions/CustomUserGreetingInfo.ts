import CustomGreetingAnsweringRuleInfo from './CustomGreetingAnsweringRuleInfo';

interface CustomUserGreetingInfo {
  /**
   * Link to a custom user greeting
   * Format: uri
   */
  uri?: string;

  /**
   * Internal identifier of a custom user greeting
   */
  id?: string;

  /**
   * Type of a custom user greeting
   */
  type?: ('Introductory' | 'Announcement' | 'InterruptPrompt' | 'ConnectingAudio' | 'ConnectingMessage' | 'Voicemail' | 'Unavailable' | 'HoldMusic' | 'PronouncedName' | 'TemplateGreeting');

  /**
   * Content media type
   */
  contentType?: ('audio/mpeg' | 'audio/wav');

  /**
   * Link to a greeting content (audio file)
   * Format: uri
   */
  contentUri?: string;

  /**
   */
  answeringRule?: CustomGreetingAnsweringRuleInfo;
}

export default CustomUserGreetingInfo;
