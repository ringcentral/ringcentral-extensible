import type MessageTemplateInfo from "./MessageTemplateInfo.js";
import type Site from "./Site.js";

interface MessageTemplateRequest {
  /**
   * Internal identifier of a template. Ignored on input
   */
  id?: string;

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
   * Specifies if a template is available on a user (Personal) or a company (Company) level
   */
  scope?: "Company" | "Personal";

  /**
   */
  site?: Site;
}

export default MessageTemplateRequest;
