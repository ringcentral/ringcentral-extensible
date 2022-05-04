import MeetingsConfiguration from './MeetingsConfiguration';
import NotificationSettings from './NotificationSettings';
import MeetingConfiguration from './MeetingConfiguration';
import VideoConfiguration from './VideoConfiguration';
import CallQueuePresence from './CallQueuePresence';
import EmergencyLocations from './EmergencyLocations';
import AdministeredSites from './AdministeredSites';
import MeetingRecordings from './MeetingRecordings';
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
import ProfileImage from './ProfileImage';
import MessageStore from './MessageStore';
import Conferencing from './Conferencing';
import PhoneNumber from './PhoneNumber';
import MessageSync from './MessageSync';
import ActiveCalls from './ActiveCalls';
import AddressBook from './AddressBook';
import CallQueues from './CallQueues';
import CallerId from './CallerId';
import Features from './Features';
import Favorite from './Favorite';
import Presence from './Presence';
import RingOut from './RingOut';
import Greeting from './Greeting';
import CallLog from './CallLog';
import Meeting from './Meeting';
import Device from './Device';
import Grant from './Grant';
import Fax from './Fax';
import Mms from './Mms';
import Sms from './Sms';
import { RestRequestConfig } from '../../../../Rest';
import {
  ListExtensionsParameters, GetExtensionListResponse, ExtensionCreationRequest, ExtensionCreationResponse, GetExtensionInfoResponse, ExtensionUpdateRequest, DeleteExtensionParameters,
} from '../../../../definitions';
import Parent from '..';
import RingCentral from '../../../..';

class Index {
  rc: RingCentral;

  parent: Parent;

  extensionId: string | null;

  constructor(parent: Parent, extensionId: string | null = '~') {
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
   * Returns the list of extensions created for a particular account. All types of extensions are included in this list.
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
   * Returns basic information about a particular extension.
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
   * Updates user settings.
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

  /**
   * Deletes extension(s) by ID(s). When an extension is being deleted the default API behaviour is as follows: ⋅⋅* user's direct numbers are preserved by becoming additional company numbers; ⋅⋅* user's digital lines (both device & associated phone number) are deleted. You can change this behaviour using the filters: ..* create unassigned extensions for each digital line of the deleted extension by setting the query parameter `savePhoneLines` to `true` in request path; ..* remove direct numbers of the deleted extension by setting the query parameter `savePhoneNumbers` to `false` in request path
   * HTTP Method: delete
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}
   * Rate Limit Group: Medium
   * App Permission: EditAccounts
   * User Permission: AddRemoveUsers
   */
  async delete(queryParams?: DeleteExtensionParameters, restRequestConfig?: RestRequestConfig): Promise<string> {
    if (this.extensionId === null) {
      throw new Error('extensionId must be specified.');
    }
    const r = await this.rc.delete<string>(this.path(), queryParams, restRequestConfig);
    return r.data;
  }

  sms(): Sms {
    return new Sms(this);
  }

  mms(): Mms {
    return new Mms(this);
  }

  fax(): Fax {
    return new Fax(this);
  }

  grant(): Grant {
    return new Grant(this);
  }

  device(): Device {
    return new Device(this);
  }

  meeting(meetingId: (string | null) = null): Meeting {
    return new Meeting(this, meetingId);
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

  presence(): Presence {
    return new Presence(this);
  }

  favorite(): Favorite {
    return new Favorite(this);
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

  activeCalls(): ActiveCalls {
    return new ActiveCalls(this);
  }

  messageSync(): MessageSync {
    return new MessageSync(this);
  }

  phoneNumber(): PhoneNumber {
    return new PhoneNumber(this);
  }

  conferencing(): Conferencing {
    return new Conferencing(this);
  }

  messageStore(messageId: (string | null) = null): MessageStore {
    return new MessageStore(this, messageId);
  }

  profileImage(scaleSize: (string | null) = null): ProfileImage {
    return new ProfileImage(this, scaleSize);
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

  meetingRecordings(): MeetingRecordings {
    return new MeetingRecordings(this);
  }

  administeredSites(): AdministeredSites {
    return new AdministeredSites(this);
  }

  emergencyLocations(locationId: (string | null) = null): EmergencyLocations {
    return new EmergencyLocations(this, locationId);
  }

  callQueuePresence(): CallQueuePresence {
    return new CallQueuePresence(this);
  }

  videoConfiguration(): VideoConfiguration {
    return new VideoConfiguration(this);
  }

  meetingConfiguration(): MeetingConfiguration {
    return new MeetingConfiguration(this);
  }

  notificationSettings(): NotificationSettings {
    return new NotificationSettings(this);
  }

  meetingsConfiguration(): MeetingsConfiguration {
    return new MeetingsConfiguration(this);
  }
}
export default Index;
