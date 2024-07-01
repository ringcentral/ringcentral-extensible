import type TemplateInfo from './TemplateInfo';
import type Site from './Site';

interface MessageTemplateRequest {
  /**
   * Name of a template
   * Required
   */
  displayName?: string;

  /**
   * Required
   */
  body?: TemplateInfo;

  /**
   */
  site?: Site;
}

export default MessageTemplateRequest;
