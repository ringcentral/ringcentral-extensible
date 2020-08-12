import {
  CustomGreetingAnsweringRuleInfo,
  CustomCompanyGreetingLanguageInfo,
} from './index';

class CustomCompanyGreetingInfo {
  /**
   * Link to an extension custom greeting
   */
  uri?: string;

  /**
   * Internal identifier of an answering rule
   */
  id?: string;

  /**
   * Type of a company greeting
   */
  type?: 'Company' | 'StartRecording' | 'StopRecording' | 'AutomaticRecording';

  /**
   * Content media type
   */
  contentType?: 'audio/mpeg' | 'audio/wav';

  /**
   * Link to a greeting content (audio file)
   */
  contentUri?: string;

  /**
   * Information on an answering rule that the greeting is applied to
   */
  answeringRule?: CustomGreetingAnsweringRuleInfo;

  /**
   * Information on a greeting language. Supported for types 'StopRecording', 'StartRecording', 'AutomaticRecording'
   */
  language?: CustomCompanyGreetingLanguageInfo;
}

export default CustomCompanyGreetingInfo;
