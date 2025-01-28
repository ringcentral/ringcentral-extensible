import MessageTemplateResponse from "./MessageTemplateResponse";

interface MessageTemplatesListResponse {
  /**
   * List of text message templates
   */
  records?: MessageTemplateResponse[];
}

export default MessageTemplatesListResponse;
