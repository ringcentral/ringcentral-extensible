/**
 * Text message template information
 */
interface TemplateInfo {
  /**
   * Text of a message template. Maximum length is 1000 symbols (2-byte UTF-16 encoded)
   * Required
   */
  text?: string;
}

export default TemplateInfo;
