import MessageStoreTemplates from "./MessageStoreTemplates/index";
import NotificationSettings from "./NotificationSettings/index";
import CallQueuePresence from "./CallQueuePresence/index";
import VideoConfiguration from "./VideoConfiguration/index";
import EmergencyLocations from "./EmergencyLocations/index";
import AdministeredSites from "./AdministeredSites/index";
import OverflowSettings from "./OverflowSettings/index";
import AddressBookSync from "./AddressBookSync/index";
import ForwardingNumber from "./ForwardingNumber/index";
import UnifiedPresence from "./UnifiedPresence/index";
import AssignableRoles from "./AssignableRoles/index";
import CallerBlocking from "./CallerBlocking/index";
import BusinessHours from "./BusinessHours/index";
import AnsweringRule from "./AnsweringRule/index";
import AssignedRole from "./AssignedRole/index";
import AuthzProfile from "./AuthzProfile/index";
import CompanyPager from "./CompanyPager/index";
import CallLogSync from "./CallLogSync/index";
import MessageStore from "./MessageStore/index";
import ProfileImage from "./ProfileImage/index";
import PhoneNumber from "./PhoneNumber/index";
import ActiveCalls from "./ActiveCalls/index";
import MessageSync from "./MessageSync/index";
import Conferencing from "./Conferencing/index";
import AddressBook from "./AddressBook/index";
import CallQueues from "./CallQueues/index";
import CallerId from "./CallerId/index";
import Features from "./Features/index";
import Presence from "./Presence/index";
import Favorite from "./Favorite/index";
import RingOut from "./RingOut/index";
import Greeting from "./Greeting/index";
import CallLog from "./CallLog/index";
import Device from "./Device/index";
import Grant from "./Grant/index";
import Mms from "./Mms/index";
import Sms from "./Sms/index";
import Fax from "./Fax/index";
import ExtensionUpdateRequest from "../../../../definitions/ExtensionUpdateRequest";
import GetExtensionInfoResponse from "../../../../definitions/GetExtensionInfoResponse";
import ExtensionCreationResponse from "../../../../definitions/ExtensionCreationResponse";
import ExtensionCreationRequest from "../../../../definitions/ExtensionCreationRequest";
import GetExtensionListResponse from "../../../../definitions/GetExtensionListResponse";
import ListExtensionsParameters from "../../../../definitions/ListExtensionsParameters";
import {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../types";

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

  public presence(): Presence {
    return new Presence(this);
  }

  public features(): Features {
    return new Features(this);
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

  public conferencing(): Conferencing {
    return new Conferencing(this);
  }

  public messageSync(): MessageSync {
    return new MessageSync(this);
  }

  public activeCalls(): ActiveCalls {
    return new ActiveCalls(this);
  }

  public phoneNumber(): PhoneNumber {
    return new PhoneNumber(this);
  }

  public profileImage(scaleSize: string | null = null): ProfileImage {
    return new ProfileImage(this, scaleSize);
  }

  public messageStore(messageId: string | null = null): MessageStore {
    return new MessageStore(this, messageId);
  }

  public callLogSync(): CallLogSync {
    return new CallLogSync(this);
  }

  public companyPager(): CompanyPager {
    return new CompanyPager(this);
  }

  public authzProfile(): AuthzProfile {
    return new AuthzProfile(this);
  }

  public assignedRole(): AssignedRole {
    return new AssignedRole(this);
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
