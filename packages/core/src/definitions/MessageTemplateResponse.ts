import type MessageTemplateInfo from "./MessageTemplateInfo.js";
import type Site from "./Site.js";

interface MessageTemplateResponse {
  /**
   * Internal identifier of a template
   */
  id?: string;

  /**
   * Name of a template
   */
  displayName?: string;

  /**
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

export default MessageTemplateResponse;
