import type CreateSocialMessagingContentRequest from '../../../../../definitions/CreateSocialMessagingContentRequest';
import type ListSocialMessagingContentsParameters from '../../../../../definitions/ListSocialMessagingContentsParameters';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;
  public contentId: string | null;

  public constructor(_parent: ParentInterface, contentId: string | null = null) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.contentId = contentId;
  }
  public path(withParameter = true): string {
    if (withParameter && this.contentId !== null) {
      return `${this._parent.path()}/contents/${this.contentId}`;
    }
    return `${this._parent.path()}/contents`;
  }
  /**
   * Returns a list of social messaging contents ordered by creation date. The default order is descending.
   *
   * The account context of this request is determined by the RC Account ID associated with
   * the access token provided in the Authorization header.
   *
   * The query parameters provided in request will be considered an AND operation to filter the list.
   *
   * A query parameter which is not specified or provided with the null value will be ignored.
   *
   * HTTP Method: get
   * Endpoint: /cx/social-messaging/v1/contents
   * Rate Limit Group: Light
   * App Permission: SocialMessaging
   */
  public async list(
    queryParams?: ListSocialMessagingContentsParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<string> {
    const r = await this.rc.get<string>(this.path(false), queryParams, restRequestConfig);
    return r.data;
  }

  /**
   * Creates the new social messaging content for use in discussions.
   *
   * This request is used to reply to an already posted content or to initiate a discussion. If authorized, the
   * authenticated user will be used as the content author.
   *
   * Content will be created and pushed asynchronously to the channel. When the content is successfully pushed to
   * the channel, the `Content.Exported` event will be reported.
   *
   * The account context of this request is determined by the RC Account ID associated with the access token provided
   * in the Authorization header.
   *
   * Replying to customer content is usually possible unless the channel or conversation is read only. Composing
   * content, on the contrary, depends on the channel itself.
   *
   * - The channel may not support it and be purely reactive like Instagram, Messenger, etc.
   *
   * - Some channels (usually public accounts, like Twitter or Facebook pages) allow content publishing
   * without targeting specific individuals.
   *
   * - Some channels (usually non-public media) require specific targeting (phone number for SMS, email address
   * for email, customer_id, etc.) to be able to create content. This is channel-specific and detailed under the
   * generic parameters.
   *
   * HTTP Method: post
   * Endpoint: /cx/social-messaging/v1/contents
   * Rate Limit Group: Light
   * App Permission: SocialMessaging
   */
  public async post(
    createSocialMessagingContentRequest: CreateSocialMessagingContentRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<string> {
    const r = await this.rc.post<string>(
      this.path(false),
      createSocialMessagingContentRequest,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Returns the social messaging content by ID specified in path.
   * HTTP Method: get
   * Endpoint: /cx/social-messaging/v1/contents/{contentId}
   * Rate Limit Group: Light
   * App Permission: SocialMessaging
   */
  public async get(restRequestConfig?: RestRequestConfig): Promise<string> {
    if (this.contentId === null) {
      throw new Error('contentId must be specified.');
    }
    const r = await this.rc.get<string>(this.path(), undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
