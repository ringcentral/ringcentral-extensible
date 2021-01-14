import Telephony from './Telephony';
import AddressBookBulkUpload from './AddressBookBulkUpload';
import ExtensionBulkUpdate from './ExtensionBulkUpdate';
import CallMonitoringGroups from './CallMonitoringGroups';
import PagingOnlyGroups from './PagingOnlyGroups';
import Templates from './Templates';
import PhoneNumber from './PhoneNumber';
import ServiceInfo from './ServiceInfo';
import BusinessAddress from './BusinessAddress';
import EmergencyLocations from './EmergencyLocations';
import EmergencyAddressAutoUpdate from './EmergencyAddressAutoUpdate';
import MessageStoreReport from './MessageStoreReport';
import MessageStoreConfiguration from './MessageStoreConfiguration';
import Meeting from './Meeting';
import MeetingRecordings from './MeetingRecordings';
import Device from './Device';
import CustomFields from './CustomFields';
import Recording from './Recording';
import ActiveCalls from './ActiveCalls';
import CallLogSync from './CallLogSync';
import CallLog from './CallLog';
import A2pSms from './A2pSms';
import CallRecording from './CallRecording';
import IvrMenus from './IvrMenus';
import IvrPrompts from './IvrPrompts';
import Greeting from './Greeting';
import AnsweringRule from './AnsweringRule';
import BusinessHours from './BusinessHours';
import Directory from './Directory';
import CallQueues from './CallQueues';
import Presence from './Presence';
import Extension from './Extension';
import {RestRequestConfig} from '../../../Rest';
import {GetAccountInfoResponse} from '../../../definitions';
import Parent from '..';
import RingCentral from '../../..';

class Index {
  rc: RingCentral;
  accountId: string | null;
  parent: Parent;

  constructor(parent: Parent, accountId: string | null = '~') {
    this.parent = parent;
    this.rc = parent.rc;
    this.accountId = accountId;
  }

  path(withParameter = true): string {
    if (withParameter && this.accountId !== null) {
      return `${this.parent.path()}/account/${this.accountId}`;
    }

    return `${this.parent.path()}/account`;
  }

  /**
   * Operation: Get Account Info
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/account/{accountId}
   */
  async get(config?: RestRequestConfig): Promise<GetAccountInfoResponse> {
    if (this.accountId === null) {
      throw new Error('accountId must be specified.');
    }

    const r = await this.rc.get<GetAccountInfoResponse>(
      this.path(),
      undefined,
      config
    );
    return r.data;
  }

  extension(extensionId: string | null = '~'): Extension {
    return new Extension(this, extensionId);
  }

  presence(): Presence {
    return new Presence(this);
  }

  callQueues(groupId: string | null = null): CallQueues {
    return new CallQueues(this, groupId);
  }

  directory(): Directory {
    return new Directory(this);
  }

  businessHours(): BusinessHours {
    return new BusinessHours(this);
  }

  answeringRule(ruleId: string | null = null): AnsweringRule {
    return new AnsweringRule(this, ruleId);
  }

  greeting(): Greeting {
    return new Greeting(this);
  }

  ivrPrompts(promptId: string | null = null): IvrPrompts {
    return new IvrPrompts(this, promptId);
  }

  ivrMenus(ivrMenuId: string | null = null): IvrMenus {
    return new IvrMenus(this, ivrMenuId);
  }

  callRecording(): CallRecording {
    return new CallRecording(this);
  }

  a2pSms(): A2pSms {
    return new A2pSms(this);
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

  recording(recordingId: string | null = null): Recording {
    return new Recording(this, recordingId);
  }

  customFields(fieldId: string | null = null): CustomFields {
    return new CustomFields(this, fieldId);
  }

  device(deviceId: string | null = null): Device {
    return new Device(this, deviceId);
  }

  meetingRecordings(): MeetingRecordings {
    return new MeetingRecordings(this);
  }

  meeting(): Meeting {
    return new Meeting(this);
  }

  messageStoreConfiguration(): MessageStoreConfiguration {
    return new MessageStoreConfiguration(this);
  }

  messageStoreReport(taskId: string | null = null): MessageStoreReport {
    return new MessageStoreReport(this, taskId);
  }

  emergencyAddressAutoUpdate(): EmergencyAddressAutoUpdate {
    return new EmergencyAddressAutoUpdate(this);
  }

  emergencyLocations(locationId: string | null = null): EmergencyLocations {
    return new EmergencyLocations(this, locationId);
  }

  businessAddress(): BusinessAddress {
    return new BusinessAddress(this);
  }

  serviceInfo(): ServiceInfo {
    return new ServiceInfo(this);
  }

  phoneNumber(phoneNumberId: string | null = null): PhoneNumber {
    return new PhoneNumber(this, phoneNumberId);
  }

  templates(templateId: string | null = null): Templates {
    return new Templates(this, templateId);
  }

  pagingOnlyGroups(pagingOnlyGroupId: string | null = null): PagingOnlyGroups {
    return new PagingOnlyGroups(this, pagingOnlyGroupId);
  }

  callMonitoringGroups(groupId: string | null = null): CallMonitoringGroups {
    return new CallMonitoringGroups(this, groupId);
  }

  extensionBulkUpdate(): ExtensionBulkUpdate {
    return new ExtensionBulkUpdate(this);
  }

  addressBookBulkUpload(): AddressBookBulkUpload {
    return new AddressBookBulkUpload(this);
  }

  telephony(): Telephony {
    return new Telephony(this);
  }
}

export default Index;
