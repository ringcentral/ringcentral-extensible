import type MessageTemplateInfo from './MessageTemplateInfo';
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
  body?: MessageTemplateInfo;

  /**
   */
  site?: Site;
}

export default MessageTemplateRequest;
