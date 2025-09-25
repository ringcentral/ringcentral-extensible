import MessageStoreTemplates from "./MessageStoreTemplates/index.js";
import NotificationSettings from "./NotificationSettings/index.js";
import CallQueuePresence from "./CallQueuePresence/index.js";
import VideoConfiguration from "./VideoConfiguration/index.js";
import EmergencyLocations from "./EmergencyLocations/index.js";
import AdministeredSites from "./AdministeredSites/index.js";
import OverflowSettings from "./OverflowSettings/index.js";
import AddressBookSync from "./AddressBookSync/index.js";
import ForwardingNumber from "./ForwardingNumber/index.js";
import UnifiedPresence from "./UnifiedPresence/index.js";
import AssignableRoles from "./AssignableRoles/index.js";
import CallerBlocking from "./CallerBlocking/index.js";
import BusinessHours from "./BusinessHours/index.js";
import AnsweringRule from "./AnsweringRule/index.js";
import CompanyPager from "./CompanyPager/index.js";
import CallLogSync from "./CallLogSync/index.js";
import AssignedRole from "./AssignedRole/index.js";
import AuthzProfile from "./AuthzProfile/index.js";
import MessageStore from "./MessageStore/index.js";
import ProfileImage from "./ProfileImage/index.js";
import MessageSync from "./MessageSync/index.js";
import ActiveCalls from "./ActiveCalls/index.js";
import Conferencing from "./Conferencing/index.js";
import PhoneNumber from "./PhoneNumber/index.js";
import AddressBook from "./AddressBook/index.js";
import CallQueues from "./CallQueues/index.js";
import CallerId from "./CallerId/index.js";
import Presence from "./Presence/index.js";
import Features from "./Features/index.js";
import Favorite from "./Favorite/index.js";
import RingOut from "./RingOut/index.js";
import Greeting from "./Greeting/index.js";
import CallLog from "./CallLog/index.js";
import Device from "./Device/index.js";
import Grant from "./Grant/index.js";
import Mms from "./Mms/index.js";
import Sms from "./Sms/index.js";
import Fax from "./Fax/index.js";
import ExtensionUpdateRequest from "../../../../definitions/ExtensionUpdateRequest.js";
import GetExtensionInfoResponse from "../../../../definitions/GetExtensionInfoResponse.js";
import ExtensionCreationResponse from "../../../../definitions/ExtensionCreationResponse.js";
import ExtensionCreationRequest from "../../../../definitions/ExtensionCreationRequest.js";
import GetExtensionListResponse from "../../../../definitions/GetExtensionListResponse.js";
import ListExtensionsParameters from "../../../../definitions/ListExtensionsParameters.js";
import {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../types.js";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;
  public extensionId: string | null;

  public constructor(
    _parent: ParentInterface,
    extensionId: string | null = "~",
  ) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.extensionId = extensionId;
  }
  public path(withParameter = true): string {
    if (withParameter && this.extensionId !== null) {
      return `${this._parent.path()}/extension/${this.extensionId}`;
    }
    return `${this._parent.path()}/extension`;
  }
  /**
   * Returns the list of extensions created for a particular account.
   * All types of extensions are included in this list.
   *
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension
   * Rate Limit Group: Medium
   * App Permission: ReadAccounts
   * User Permission: ReadExtensions
   */
  public async list(
    queryParams?: ListExtensionsParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<GetExtensionListResponse> {
    const r = await this.rc.get<GetExtensionListResponse>(
      this.path(false),
      queryParams,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Creates an extension.
   *
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension
   * Rate Limit Group: Medium
   * App Permission: EditAccounts
   * User Permission: AddRemoveUsers
   */
  public async post(
    extensionCreationRequest: ExtensionCreationRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<ExtensionCreationResponse> {
    const r = await this.rc.post<ExtensionCreationResponse>(
      this.path(false),
      extensionCreationRequest,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Returns basic information about a particular extension of an account.
   *
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   * User Permission: ReadExtensions
   */
  public async get(
    restRequestConfig?: RestRequestConfig,
  ): Promise<GetExtensionInfoResponse> {
    if (this.extensionId === null) {
      throw new Error("extensionId must be specified.");
    }
    const r = await this.rc.get<GetExtensionInfoResponse>(
      this.path(),
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Updates the user settings.
   * HTTP Method: put
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}
   * Rate Limit Group: Medium
   * App Permission: EditExtensions
   * User Permission: EditUserInfo OR EditUserCredentials
   */
  public async put(
    extensionUpdateRequest: ExtensionUpdateRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<GetExtensionInfoResponse> {
    if (this.extensionId === null) {
      throw new Error("extensionId must be specified.");
    }
    const r = await this.rc.put<GetExtensionInfoResponse>(
      this.path(),
      extensionUpdateRequest,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  public fax(): Fax {
    return new Fax(this);
  }

  public sms(): Sms {
    return new Sms(this);
  }

  public mms(): Mms {
    return new Mms(this);
  }

  public grant(): Grant {
    return new Grant(this);
  }

  public device(): Device {
    return new Device(this);
  }

  public callLog(callRecordId: string | null = null): CallLog {
    return new CallLog(this, callRecordId);
  }

  public greeting(greetingId: string | null = null): Greeting {
    return new Greeting(this, greetingId);
  }

  public ringOut(ringoutId: string | null = null): RingOut {
    return new RingOut(this, ringoutId);
  }

  public favorite(): Favorite {
    return new Favorite(this);
  }

  public features(): Features {
    return new Features(this);
  }

  public presence(): Presence {
    return new Presence(this);
  }

  public callerId(): CallerId {
    return new CallerId(this);
  }

  public callQueues(): CallQueues {
    return new CallQueues(this);
  }

  public addressBook(): AddressBook {
    return new AddressBook(this);
  }

  public phoneNumber(): PhoneNumber {
    return new PhoneNumber(this);
  }

  public conferencing(): Conferencing {
    return new Conferencing(this);
  }

  public activeCalls(): ActiveCalls {
    return new ActiveCalls(this);
  }

  public messageSync(): MessageSync {
    return new MessageSync(this);
  }

  public profileImage(scaleSize: string | null = null): ProfileImage {
    return new ProfileImage(this, scaleSize);
  }

  public messageStore(messageId: string | null = null): MessageStore {
    return new MessageStore(this, messageId);
  }

  public authzProfile(): AuthzProfile {
    return new AuthzProfile(this);
  }

  public assignedRole(): AssignedRole {
    return new AssignedRole(this);
  }

  public callLogSync(): CallLogSync {
    return new CallLogSync(this);
  }

  public companyPager(): CompanyPager {
    return new CompanyPager(this);
  }

  public answeringRule(ruleId: string | null = null): AnsweringRule {
    return new AnsweringRule(this, ruleId);
  }

  public businessHours(): BusinessHours {
    return new BusinessHours(this);
  }

  public callerBlocking(): CallerBlocking {
    return new CallerBlocking(this);
  }

  public assignableRoles(): AssignableRoles {
    return new AssignableRoles(this);
  }

  public unifiedPresence(): UnifiedPresence {
    return new UnifiedPresence(this);
  }

  public forwardingNumber(
    forwardingNumberId: string | null = null,
  ): ForwardingNumber {
    return new ForwardingNumber(this, forwardingNumberId);
  }

  public addressBookSync(): AddressBookSync {
    return new AddressBookSync(this);
  }

  public overflowSettings(): OverflowSettings {
    return new OverflowSettings(this);
  }

  public administeredSites(): AdministeredSites {
    return new AdministeredSites(this);
  }

  public emergencyLocations(
    locationId: string | null = null,
  ): EmergencyLocations {
    return new EmergencyLocations(this, locationId);
  }

  public videoConfiguration(): VideoConfiguration {
    return new VideoConfiguration(this);
  }

  public callQueuePresence(): CallQueuePresence {
    return new CallQueuePresence(this);
  }

  public notificationSettings(): NotificationSettings {
    return new NotificationSettings(this);
  }

  public messageStoreTemplates(
    templateId: string | null = null,
  ): MessageStoreTemplates {
    return new MessageStoreTemplates(this, templateId);
  }
}
export default Index;
