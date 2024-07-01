import type TemplateInfo from './TemplateInfo';
import type Site from './Site';

interface MessageTemplateUpdateRequest {
  /**
   * Name of a template
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

export default MessageTemplateUpdateRequest;
