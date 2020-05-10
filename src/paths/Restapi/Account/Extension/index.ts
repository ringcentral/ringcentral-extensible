import MeetingRecordings from './MeetingRecordings';
import Device from './Device';
import Features from './Features';
import CallQueues from './CallQueues';
import VideoConfiguration from './VideoConfiguration';
import Conferencing from './Conferencing';
import ProfileImage from './ProfileImage';
import NotificationSettings from './NotificationSettings';
import Grant from './Grant';
import CallerId from './CallerId';
import PhoneNumber from './PhoneNumber';
import Greeting from './Greeting';
import AnsweringRule from './AnsweringRule';
import ForwardingNumber from './ForwardingNumber';
import CallerBlocking from './CallerBlocking';
import BusinessHours from './BusinessHours';
import AuthzProfile from './AuthzProfile';
import MeetingsConfiguration from './MeetingsConfiguration';
import Meeting from './Meeting';
import UnifiedPresence from './UnifiedPresence';
import Presence from './Presence';
import Favorite from './Favorite';
import AddressBookSync from './AddressBookSync';
import AddressBook from './AddressBook';
import RingOut from './RingOut';
import MessageSync from './MessageSync';
import MessageStore from './MessageStore';
import Fax from './Fax';
import CompanyPager from './CompanyPager';
import Mms from './Mms';
import Sms from './Sms';
import ActiveCalls from './ActiveCalls';
import CallLogSync from './CallLogSync';
import CallLog from './CallLog';
import {RestRequestConfig} from '../../../../Rest';
import {
  GetExtensionListResponse,
  ListExtensionsParameters,
  ExtensionCreationResponse,
  ExtensionCreationRequest,
  GetExtensionInfoResponse,
  ExtensionUpdateRequest,
  DeleteExtensionParameters,
} from '../../../../definitions';
import Parent from '..';
import RingCentral from '../../../..';

class Extension {
  rc: RingCentral;
  extensionId: string | null;
  parent: Parent;

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
   * Operation: Get Extension List
   * Rate Limit Group: Medium
   * Http get /restapi/v1.0/account/{accountId}/extension
   */
  async list(
    queryParams?: ListExtensionsParameters,
    config?: RestRequestConfig
  ): Promise<GetExtensionListResponse> {
    const r = await this.rc.get<GetExtensionListResponse>(
      this.path(false),
      queryParams,
      config
    );
    return r.data;
  }

  /**
   * Operation: Create Extension
   * Rate Limit Group: Medium
   * Http post /restapi/v1.0/account/{accountId}/extension
   */
  async post(
    extensionCreationRequest: ExtensionCreationRequest,
    config?: RestRequestConfig
  ): Promise<ExtensionCreationResponse> {
    const r = await this.rc.post<ExtensionCreationResponse>(
      this.path(false),
      extensionCreationRequest,
      undefined,
      config
    );
    return r.data;
  }

  /**
   * Operation: Get Extension
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}
   */
  async get(config?: RestRequestConfig): Promise<GetExtensionInfoResponse> {
    if (this.extensionId === null) {
      throw new Error('extensionId must be specified.');
    }

    const r = await this.rc.get<GetExtensionInfoResponse>(
      this.path(),
      undefined,
      config
    );
    return r.data;
  }

  /**
   * Operation: Update Extension
   * Rate Limit Group: Medium
   * Http put /restapi/v1.0/account/{accountId}/extension/{extensionId}
   */
  async put(
    extensionUpdateRequest: ExtensionUpdateRequest,
    config?: RestRequestConfig
  ): Promise<GetExtensionInfoResponse> {
    if (this.extensionId === null) {
      throw new Error('extensionId must be specified.');
    }

    const r = await this.rc.put<GetExtensionInfoResponse>(
      this.path(),
      extensionUpdateRequest,
      undefined,
      config
    );
    return r.data;
  }

  /**
   * Operation: Delete Extension
   * Rate Limit Group: Medium
   * Http delete /restapi/v1.0/account/{accountId}/extension/{extensionId}
   */
  async delete(
    queryParams?: DeleteExtensionParameters,
    config?: RestRequestConfig
  ): Promise<string> {
    if (this.extensionId === null) {
      throw new Error('extensionId must be specified.');
    }

    const r = await this.rc.delete<string>(this.path(), queryParams, config);
    return r.data;
  }

  callLog(callRecordId: string | null = null): CallLog {
    return new CallLog(this, callRecordId);
  }

  callLogSync(): CallLogSync {
    return new CallLogSync(this);
  }

  activeCalls(): ActiveCalls {
    return new ActiveCalls(this);
  }

  sms(): Sms {
    return new Sms(this);
  }

  mms(): Mms {
    return new Mms(this);
  }

  companyPager(): CompanyPager {
    return new CompanyPager(this);
  }

  fax(): Fax {
    return new Fax(this);
  }

  messageStore(messageId: string | null = null): MessageStore {
    return new MessageStore(this, messageId);
  }

  messageSync(): MessageSync {
    return new MessageSync(this);
  }

  ringOut(ringoutId: string | null = null): RingOut {
    return new RingOut(this, ringoutId);
  }

  addressBook(): AddressBook {
    return new AddressBook(this);
  }

  addressBookSync(): AddressBookSync {
    return new AddressBookSync(this);
  }

  favorite(): Favorite {
    return new Favorite(this);
  }

  presence(): Presence {
    return new Presence(this);
  }

  unifiedPresence(): UnifiedPresence {
    return new UnifiedPresence(this);
  }

  meeting(meetingId: string | null = null): Meeting {
    return new Meeting(this, meetingId);
  }

  meetingsConfiguration(): MeetingsConfiguration {
    return new MeetingsConfiguration(this);
  }

  authzProfile(): AuthzProfile {
    return new AuthzProfile(this);
  }

  businessHours(): BusinessHours {
    return new BusinessHours(this);
  }

  callerBlocking(): CallerBlocking {
    return new CallerBlocking(this);
  }

  forwardingNumber(forwardingNumberId: string | null = null): ForwardingNumber {
    return new ForwardingNumber(this, forwardingNumberId);
  }

  answeringRule(ruleId: string | null = null): AnsweringRule {
    return new AnsweringRule(this, ruleId);
  }

  greeting(greetingId: string | null = null): Greeting {
    return new Greeting(this, greetingId);
  }

  phoneNumber(): PhoneNumber {
    return new PhoneNumber(this);
  }

  callerId(): CallerId {
    return new CallerId(this);
  }

  grant(): Grant {
    return new Grant(this);
  }

  notificationSettings(): NotificationSettings {
    return new NotificationSettings(this);
  }

  profileImage(scaleSize: string | null = null): ProfileImage {
    return new ProfileImage(this, scaleSize);
  }

  conferencing(): Conferencing {
    return new Conferencing(this);
  }

  videoConfiguration(): VideoConfiguration {
    return new VideoConfiguration(this);
  }

  callQueues(): CallQueues {
    return new CallQueues(this);
  }

  features(): Features {
    return new Features(this);
  }

  device(): Device {
    return new Device(this);
  }

  meetingRecordings(): MeetingRecordings {
    return new MeetingRecordings(this);
  }
}

export default Extension;
