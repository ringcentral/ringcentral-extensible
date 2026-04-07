import type MessageTemplateInfo from "./MessageTemplateInfo.js";
import type Site from "./Site.js";

interface MessageTemplateUpdateRequest {
  /**
   * Name of a template
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

export default MessageTemplateUpdateRequest;
