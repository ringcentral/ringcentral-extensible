import type ContentAttachment from './ContentAttachment';
import type ContentBodyFormatted from './ContentBodyFormatted';
import type ContentContextData from './ContentContextData';

interface ContentModel {
  /**
   * An array containing the attachments that are attached to the content.
   * Required
   */
  attachments?: ContentAttachment[];

  /**
   * Identity identifier of the author of content.
   *
   *  Not mandatory on creation, by default it uses the token's user first identity on channel.
   * Required
   * Example: 541014e17aa58d8ccf000023
   */
  authorIdentityId?: string;

  /**
   * Auto submitted content:
   *    - won't reopen tasks or interventions
   *    - can be used to send automatic messages like asking an user to follow on twitter, sending a survey, etc,
   *    - doesn't get included in statistics
   * Required
   */
  autoSubmitted?: boolean;

  /**
   * The content's body.
   *
   *  On creation this field is mandatory except for WhatsApp content using templates.
   *
   *  The following are the max length restrictions for the different channels supported.
   *  Channel and max length
   *    * Apple Messages For Business (max length 10000)
   *    * Email (max length 262144)
   *    * Engage Messaging (max length 1024)
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
   * Required
   * Example: Body of the content
   */
  body?: string;

  /**
   * Required
   */
  bodyFormatted?: ContentBodyFormatted;

  /**
   * Values can be Text or Html.
   * Required
   */
  bodyInputFormat?: 'Text' | 'Html';

  /**
   * List of the category identifiers of the content.
   * Required
   * Example: 541014e17aa58d8ccf000023,541014e17aa58d8ccf002023
   */
  categoryIds?: string[];

  /**
   */
  contextData?: ContentContextData;

  /**
   * Creation time of the resource.
   * Required
   * Format: date-time
   * Example: 2023-02-04T12:43:07Z
   */
  creationTime?: string;

  /**
   * Created from of the content.
   * Required
   */
  createdFrom?: 'Synchronizer' | 'Interface' | 'Api' | 'AutoSurvey' | 'AutoResponseTrigger' | 'AutoRequestEmail';

  /**
   * RC user id of the creator
   * Required
   * Example: 2683222036
   */
  creatorId?: string;

  /**
   * External categories of the content.
   *
   *  Present only if the content has foreignCategories.
   * Example: foreign_category_id
   */
  foreignCategories?: string[];

  /**
   * Identifier of the content.
   * Required
   * Example: 541014e17aa58d8ccf000023
   */
  id?: string;

  /**
   * The identity identifier of the content to which this content is a reply to.
   * Required
   * Example: 541014e17asdd8ccf000023
   */
  inReplyToAuthorIdentityId?: string;

  /**
   * The content identifier to which this content is a reply to.
   *
   *  On creation, if omitted, a new discussion will be created. If the channel does not support to initiate discussion this parameter is mandatory.
   * Required
   * Example: 123414e17asdd8ccf000023
   */
  inReplyToContentId?: string;

  /**
   * The intervention identifier of the content.
   * Required
   * Example: 123415437asdd8ccf000023
   */
  interventionId?: string;

  /**
   * Language of the content.
   * Required
   * Example: En
   */
  language?: string;

  /**
   * True if the content is publicly visible on the remote channel (default).
   *
   *  Private content is NOT supported on every channel.
   * Required
   * Default: true
   */
  public?: boolean;

  /**
   * True if the content is published on the remote channel.
   * Required
   * Example: true
   */
  published?: boolean;

  /**
   * Rating of the content.
   *
   *  Present only if the content supports rating and rating is filled.
   * Required
   * Format: int32
   * Example: 4
   */
  rating?: number;

  /**
   * True if the content has been deleted on the remote channel.
   * Required
   */
  remotelyDeleted?: boolean;

  /**
   * Identifier of the channel.
   *
   *  On creation if `inReplyToContentId` is specified, the channel will be determined from it. Otherwise, this parameter is mandatory.
   * Required
   * Example: fff415437asdd8ccf000023
   */
  sourceId?: string;

  /**
   * Type of the channel.
   * Required
   */
  sourceType?:
    | 'AppleMessagesForBusiness'
    | 'Email'
    | 'EngageMessaging'
    | 'Facebook'
    | 'GoogleBusinessMessages'
    | 'GoogleMyBusiness'
    | 'Instagram'
    | 'InstagramMessaging'
    | 'Linkedin'
    | 'Messenger'
    | 'Twitter'
    | 'Viber'
    | 'WhatsApp'
    | 'Youtube';

  /**
   * External Uri of the content channel.
   * Required
   * Format: uri
   */
  sourceUri?: string;

  /**
   * Content status.
   * Required
   */
  status?: 'New' | 'Assigned' | 'Replied' | 'UserReply' | 'UserInitiated' | 'Ignored';

  /**
   * Synchronization status.
   * Required
   * Example: success
   */
  synchronizationStatus?: string;

  /**
   * Synchronization error details.
   * Required
   */
  synchronizationError?: string;

  /**
   * Content thread identifier of the content.
   * Required
   */
  threadId?: string;

  /**
   * Applicable to Email channels only.
   *
   *  The subject of the email.
   *
   *  This field is mandatory when initiating a discussion.
   * Required
   * Example: An email title
   */
  title?: string;

  /**
   * Type of the content.
   * Required
   * Example: Email
   */
  type?:
    | 'Album'
    | 'AuthenticateMessage'
    | 'AuthenticateResponse'
    | 'Carousel'
    | 'CarouselMessage'
    | 'Comment'
    | 'ContactMessage'
    | 'Content'
    | 'Email'
    | 'FormMessage'
    | 'FormResponse'
    | 'HsmMessage'
    | 'Link'
    | 'ListMessage'
    | 'Media'
    | 'Message'
    | 'OutboundMessage'
    | 'PaymentMessage'
    | 'Photo'
    | 'PostbackMessage'
    | 'PrivateTweet'
    | 'PromptMessage'
    | 'Question'
    | 'Review'
    | 'ReviewResponse'
    | 'RichLinkMessage'
    | 'SelectMessage'
    | 'Status'
    | 'TemplateMessage'
    | 'TimePickerMessage'
    | 'Tweet'
    | 'Video'
    | 'VideoCallRequestMessage';

  /**
   * The time when the last modification was completed.
   * Required
   * Format: date-time
   * Example: 2023-02-04T12:43:07Z
   */
  lastModifiedTime?: string;

  /**
   * Types of structured messages that can be used to reply to this type of message.
   * Required
   */
  capabilitiesSupported?: string[];
}

export default ContentModel;
