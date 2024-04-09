import type ContentContextData from './ContentContextData';

interface CreateContentRequest {
  /**
   * Identity identifier of the author of content.
   *
   *  Not mandatory on creation, by default it uses the token's user first identity on channel.
   * Example: 541014e17aa58d8ccf000023
   */
  authorIdentityId?: string;

  /**
   * The content's body.
   *
   *  On creation this field is mandatory except for WhatsApp content using templates.
   *
   *  The following are the max length restrictions for the different channels supported.
   *  Channel and max length
   *    * Apple Messages For Business (max length 10000)
   *    * Email (max length 262144)
   *    * RingCX Digital Messaging (max length 1024)
   *    * Facebook (max length 8000)
   *    * GoogleBusinessMessages (max length 3000)
   *    * Google My Business (max length 4000)
   *    * Instagram (max length 950)
   *    * Instagram Messaging (max length 1000)
   *    * LinkedIn (max length 3000)
   *    * Messenger (max length 2000)
   *    * Twitter (max length 280)
   *    * Viber (max length 7000)
   *    * WhatsApp (max length 3800)
   *    * Youtube (max length 8000)
   * Example: Body of the content
   */
  body?: string;

  /**
   * The content identifier to which this content is a reply to.
   *
   *  On creation, if omitted, a new discussion will be created. If the channel does not support to initiate discussion this parameter is mandatory.
   * Example: 123414e17asdd8ccf000023
   */
  inReplyToContentId?: string;

  /**
   * True if the content is publicly visible on the remote channel (default).
   *
   *  Private content is NOT supported on every channel.
   * Default: true
   */
  public?: boolean;

  /**
   * Identifier of the channel.
   *
   *  On creation if `inReplyToContentId` is specified, the channel will be determined from it. Otherwise, this parameter is mandatory.
   * Example: fff415437asdd8ccf000023
   */
  sourceId?: string;

  /**
   * An array containing the attachment identifiers that need to be attached to the content.
   * Example: 541014e17aa58d8ccf000023,541014e17aa58d8ccf000023
   */
  attachmentIds?: string[];

  /**
   * Applicable to Email channels only.
   *
   *  The subject of the email.
   *
   *  This field is mandatory when initiating a discussion.
   * Example: An email title
   */
  title?: string;

  /**
   * Applicable on Email channels only.
   *
   *  An array containing the email addresses used in sections of the email.
   *
   *  This parameter is mandatory when initiating a discussion.
   */
  to?: string[];

  /**
   * Applicable on Email channels only.
   *
   *  An array containing the email addresses used in sections of the email.
   *
   *  This parameter is mandatory when initiating a discussion.
   */
  cc?: string[];

  /**
   * Applicable on Email channels only.
   *
   *  An array containing the email addresses used in sections of the email.
   *
   *  This parameter is mandatory when initiating a discussion.
   */
  bcc?: string[];

  /**
   * Applicable to WhatsApp channels only.
   *
   *  Name of the Whatsapp template to use for the content.
   *
   *  All available template names are visible on the Whatsapp Business Manager interface.
   * Example: customer_order_shipment_template
   */
  templateName?: string;

  /**
   * Applicable to WhatsApp channels only.
   *
   *  Language of the Whatsapp template to use for the content. All available template languages are visible on the Whatsapp Business Manager interface.
   *
   *  Language specified must conform to the ISO 639-1 alpha-2 codes for representing the names of languages.
   * Example: fr
   */
  templateLanguage?: string;

  /**
   * Applicable to WhatsApp channels only.
   *
   *  Component configuration of the Whatsapp template to use for the content.
   *
   *  All available components are visible on the Whatsapp Business Manager interface.
   * Example: [object Object],[object Object]
   */
  components?: object[];

  /**
   */
  contextData?: ContentContextData;

  /**
   * Auto submitted content:
   *    - won't reopen tasks or interventions
   *    - can be used to send automatic messages like asking an user to follow on twitter, sending a survey, etc,
   *    - doesn't get included in statistics
   */
  autoSubmitted?: boolean;
}

export default CreateContentRequest;
