import MessageTemplateResponse from "./MessageTemplateResponse.js";

interface MessageTemplatesListResponse {
  /**
   * List of text message templates
   */
  records?: MessageTemplateResponse[];
}

export default MessageTemplatesListResponse;
