import Content from "./Content/index.js";
import Utils from "../../../../../Utils.js";
import CustomUserGreetingInfo from "../../../../../definitions/CustomUserGreetingInfo.js";
import CreateCustomUserGreetingParameters from "../../../../../definitions/CreateCustomUserGreetingParameters.js";
import CreateCustomUserGreetingRequest from "../../../../../definitions/CreateCustomUserGreetingRequest.js";
import {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../../types.js";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;
  public greetingId: string | null;

  public constructor(
    _parent: ParentInterface,
    greetingId: string | null = null,
  ) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.greetingId = greetingId;
  }
  public path(withParameter = true): string {
    if (withParameter && this.greetingId !== null) {
      return `${this._parent.path()}/greeting/${this.greetingId}`;
    }
    return `${this._parent.path()}/greeting`;
  }
  /**
   * Creates custom greeting for an extension user.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/greeting
   * Rate Limit Group: Heavy
   * App Permission: EditExtensions
   * User Permission: EditUserAnsweringRules
   */
  public async post(
    createCustomUserGreetingRequest: CreateCustomUserGreetingRequest,
    queryParams?: CreateCustomUserGreetingParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<CustomUserGreetingInfo> {
    const formData = await Utils.getFormData(createCustomUserGreetingRequest);
    const r = await this.rc.post<CustomUserGreetingInfo>(
      this.path(false),
      formData,
      queryParams,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Returns a custom user greeting by ID.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/greeting/{greetingId}
   * Rate Limit Group: Medium
   * App Permission: ReadAccounts
   * User Permission: ReadUserInfo
   */
  public async get(
    restRequestConfig?: RestRequestConfig,
  ): Promise<CustomUserGreetingInfo> {
    if (this.greetingId === null) {
      throw new Error("greetingId must be specified.");
    }
    const r = await this.rc.get<CustomUserGreetingInfo>(
      this.path(),
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  public content(): Content {
    return new Content(this);
  }
}
export default Index;
