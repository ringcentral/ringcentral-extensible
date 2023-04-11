import NotificationSettings from './NotificationSettings';
import CallQueuePresence from './CallQueuePresence';
import VideoConfiguration from './VideoConfiguration';
import EmergencyLocations from './EmergencyLocations';
import AdministeredSites from './AdministeredSites';
import OverflowSettings from './OverflowSettings';
import AddressBookSync from './AddressBookSync';
import ForwardingNumber from './ForwardingNumber';
import UnifiedPresence from './UnifiedPresence';
import CallerBlocking from './CallerBlocking';
import BusinessHours from './BusinessHours';
import AnsweringRule from './AnsweringRule';
import AssignedRole from './AssignedRole';
import AuthzProfile from './AuthzProfile';
import CompanyPager from './CompanyPager';
import CallLogSync from './CallLogSync';
import MessageStore from './MessageStore';
import ProfileImage from './ProfileImage';
import PhoneNumber from './PhoneNumber';
import ActiveCalls from './ActiveCalls';
import MessageSync from './MessageSync';
import Conferencing from './Conferencing';
import AddressBook from './AddressBook';
import CallQueues from './CallQueues';
import CallerId from './CallerId';
import Features from './Features';
import Presence from './Presence';
import Favorite from './Favorite';
import RingOut from './RingOut';
import Greeting from './Greeting';
import CallLog from './CallLog';
import Device from './Device';
import Grant from './Grant';
import Mms from './Mms';
import Sms from './Sms';
import Fax from './Fax';
import ExtensionUpdateRequest from '../../../../definitions/ExtensionUpdateRequest';
import GetExtensionInfoResponse from '../../../../definitions/GetExtensionInfoResponse';
import ExtensionCreationResponse from '../../../../definitions/ExtensionCreationResponse';
import ExtensionCreationRequest from '../../../../definitions/ExtensionCreationRequest';
import GetExtensionListResponse from '../../../../definitions/GetExtensionListResponse';
import ListExtensionsParameters from '../../../../definitions/ListExtensionsParameters';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  extensionId: string | null;

  constructor(parent: ParentInterface, extensionId: string | null = '~') {
    this.parent = parent;
    this.rc = parent.rc;
    this.extensionId = extensionId;
  }

  path(withParameter = true): string {
    if (withParameter && this.extensionId !== null) {
      return `${this.parent.path()}/extension/${this.extensionId}`;
    }
    return `${this.parent.path()}/extension`;
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
  async list(queryParams?: ListExtensionsParameters, restRequestConfig?: RestRequestConfig): Promise<GetExtensionListResponse> {
    const r = await this.rc.get<GetExtensionListResponse>(this.path(false), queryParams, restRequestConfig);
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
  async post(extensionCreationRequest: ExtensionCreationRequest, restRequestConfig?: RestRequestConfig): Promise<ExtensionCreationResponse> {
    const r = await this.rc.post<ExtensionCreationResponse>(this.path(false), extensionCreationRequest, undefined, restRequestConfig);
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
  async get(restRequestConfig?: RestRequestConfig): Promise<GetExtensionInfoResponse> {
    if (this.extensionId === null) {
      throw new Error('extensionId must be specified.');
    }
    const r = await this.rc.get<GetExtensionInfoResponse>(this.path(), undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Updates the user settings.
 *
   * HTTP Method: put
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}
   * Rate Limit Group: Medium
   * App Permission: EditExtensions
   * User Permission: EditUserInfo OR EditUserCredentials
   */
  async put(extensionUpdateRequest: ExtensionUpdateRequest, restRequestConfig?: RestRequestConfig): Promise<GetExtensionInfoResponse> {
    if (this.extensionId === null) {
      throw new Error('extensionId must be specified.');
    }
    const r = await this.rc.put<GetExtensionInfoResponse>(this.path(), extensionUpdateRequest, undefined, restRequestConfig);
    return r.data;
  }

  fax(): Fax {
    return new Fax(this);
  }

  sms(): Sms {
    return new Sms(this);
  }

  mms(): Mms {
    return new Mms(this);
  }

  grant(): Grant {
    return new Grant(this);
  }

  device(): Device {
    return new Device(this);
  }

  callLog(callRecordId: (string | null) = null): CallLog {
    return new CallLog(this, callRecordId);
  }

  greeting(greetingId: (string | null) = null): Greeting {
    return new Greeting(this, greetingId);
  }

  ringOut(ringoutId: (string | null) = null): RingOut {
    return new RingOut(this, ringoutId);
  }

  favorite(): Favorite {
    return new Favorite(this);
  }

  presence(): Presence {
    return new Presence(this);
  }

  features(): Features {
    return new Features(this);
  }

  callerId(): CallerId {
    return new CallerId(this);
  }

  callQueues(): CallQueues {
    return new CallQueues(this);
  }

  addressBook(): AddressBook {
    return new AddressBook(this);
  }

  conferencing(): Conferencing {
    return new Conferencing(this);
  }

  messageSync(): MessageSync {
    return new MessageSync(this);
  }

  activeCalls(): ActiveCalls {
    return new ActiveCalls(this);
  }

  phoneNumber(): PhoneNumber {
    return new PhoneNumber(this);
  }

  profileImage(scaleSize: (string | null) = null): ProfileImage {
    return new ProfileImage(this, scaleSize);
  }

  messageStore(messageId: (string | null) = null): MessageStore {
    return new MessageStore(this, messageId);
  }

  callLogSync(): CallLogSync {
    return new CallLogSync(this);
  }

  companyPager(): CompanyPager {
    return new CompanyPager(this);
  }

  authzProfile(): AuthzProfile {
    return new AuthzProfile(this);
  }

  assignedRole(): AssignedRole {
    return new AssignedRole(this);
  }

  answeringRule(ruleId: (string | null) = null): AnsweringRule {
    return new AnsweringRule(this, ruleId);
  }

  businessHours(): BusinessHours {
    return new BusinessHours(this);
  }

  callerBlocking(): CallerBlocking {
    return new CallerBlocking(this);
  }

  unifiedPresence(): UnifiedPresence {
    return new UnifiedPresence(this);
  }

  forwardingNumber(forwardingNumberId: (string | null) = null): ForwardingNumber {
    return new ForwardingNumber(this, forwardingNumberId);
  }

  addressBookSync(): AddressBookSync {
    return new AddressBookSync(this);
  }

  overflowSettings(): OverflowSettings {
    return new OverflowSettings(this);
  }

  administeredSites(): AdministeredSites {
    return new AdministeredSites(this);
  }

  emergencyLocations(locationId: (string | null) = null): EmergencyLocations {
    return new EmergencyLocations(this, locationId);
  }

  videoConfiguration(): VideoConfiguration {
    return new VideoConfiguration(this);
  }

  callQueuePresence(): CallQueuePresence {
    return new CallQueuePresence(this);
  }

  notificationSettings(): NotificationSettings {
    return new NotificationSettings(this);
  }
}
export default Index;
