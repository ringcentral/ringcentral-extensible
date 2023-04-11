import CustomGreetingAnsweringRuleInfo from './CustomGreetingAnsweringRuleInfo';
import CustomCompanyGreetingLanguageInfo from './CustomCompanyGreetingLanguageInfo';

interface CustomCompanyGreetingInfo {
  /**
   * Link to an extension custom greeting
   * Format: uri
   */
  uri?: string;

  /**
   * Internal identifier of an answering rule
   */
  id?: string;

  /**
   * Type of a company greeting
   */
  type?: ('Company' | 'StartRecording' | 'StopRecording' | 'AutomaticRecording' | 'TemplateGreeting');

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

  /**
   */
  language?: CustomCompanyGreetingLanguageInfo;
}

export default CustomCompanyGreetingInfo;
