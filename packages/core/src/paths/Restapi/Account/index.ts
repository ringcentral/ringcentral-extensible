import EmergencyAddressAutoUpdate from './EmergencyAddressAutoUpdate';
import MessageStoreConfiguration from './MessageStoreConfiguration';
import AddressBookBulkUpload from './AddressBookBulkUpload';
import CallMonitoringGroups from './CallMonitoringGroups';
import ExtensionBulkUpdate from './ExtensionBulkUpdate';
import MessageStoreReport from './MessageStoreReport';
import EmergencyLocations from './EmergencyLocations';
import MeetingRecordings from './MeetingRecordings';
import PagingOnlyGroups from './PagingOnlyGroups';
import BusinessAddress from './BusinessAddress';
import CallRecording from './CallRecording';
import BusinessHours from './BusinessHours';
import AnsweringRule from './AnsweringRule';
import AssignedRole from './AssignedRole';
import CallLogSync from './CallLogSync';
import CustomFields from './CustomFields';
import ServiceInfo from './ServiceInfo';
import ActiveCalls from './ActiveCalls';
import PhoneNumber from './PhoneNumber';
import CallQueues from './CallQueues';
import IvrPrompts from './IvrPrompts';
import AuditTrail from './AuditTrail';
import UserRole from './UserRole';
import IvrMenus from './IvrMenus';
import Templates from './Templates';
import Extension from './Extension';
import Recording from './Recording';
import Telephony from './Telephony';
import Directory from './Directory';
import Greeting from './Greeting';
import Presence from './Presence';
import CallLog from './CallLog';
import A2pSms from './A2pSms';
import Meeting from './Meeting';
import Device from './Device';
import GetAccountInfoResponse from '../../../definitions/GetAccountInfoResponse';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  accountId: string | null;

  constructor(parent: ParentInterface, accountId: string | null = '~') {
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
   * Returns basic information about a particular RingCentral customer account.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   * User Permission: ReadCompanyInfo
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<GetAccountInfoResponse> {
    if (this.accountId === null) {
      throw new Error('accountId must be specified.');
    }
    const r = await this.rc.get<GetAccountInfoResponse>(this.path(), undefined, restRequestConfig);
    return r.data;
  }

  device(deviceId: (string | null) = null): Device {
    return new Device(this, deviceId);
  }

  meeting(): Meeting {
    return new Meeting(this);
  }

  a2pSms(): A2pSms {
    return new A2pSms(this);
  }

  callLog(callRecordId: (string | null) = null): CallLog {
    return new CallLog(this, callRecordId);
  }

  presence(): Presence {
    return new Presence(this);
  }

  greeting(): Greeting {
    return new Greeting(this);
  }

  directory(): Directory {
    return new Directory(this);
  }

  telephony(): Telephony {
    return new Telephony(this);
  }

  recording(recordingId: (string | null) = null): Recording {
    return new Recording(this, recordingId);
  }

  extension(extensionId: (string | null) = '~'): Extension {
    return new Extension(this, extensionId);
  }

  templates(templateId: (string | null) = null): Templates {
    return new Templates(this, templateId);
  }

  ivrMenus(ivrMenuId: (string | null) = null): IvrMenus {
    return new IvrMenus(this, ivrMenuId);
  }

  userRole(roleId: (string | null) = null): UserRole {
    return new UserRole(this, roleId);
  }

  auditTrail(): AuditTrail {
    return new AuditTrail(this);
  }

  ivrPrompts(promptId: (string | null) = null): IvrPrompts {
    return new IvrPrompts(this, promptId);
  }

  callQueues(groupId: (string | null) = null): CallQueues {
    return new CallQueues(this, groupId);
  }

  phoneNumber(phoneNumberId: (string | null) = null): PhoneNumber {
    return new PhoneNumber(this, phoneNumberId);
  }

  activeCalls(): ActiveCalls {
    return new ActiveCalls(this);
  }

  serviceInfo(): ServiceInfo {
    return new ServiceInfo(this);
  }

  customFields(fieldId: (string | null) = null): CustomFields {
    return new CustomFields(this, fieldId);
  }

  callLogSync(): CallLogSync {
    return new CallLogSync(this);
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

  callRecording(): CallRecording {
    return new CallRecording(this);
  }

  businessAddress(): BusinessAddress {
    return new BusinessAddress(this);
  }

  pagingOnlyGroups(pagingOnlyGroupId: (string | null) = null): PagingOnlyGroups {
    return new PagingOnlyGroups(this, pagingOnlyGroupId);
  }

  meetingRecordings(): MeetingRecordings {
    return new MeetingRecordings(this);
  }

  emergencyLocations(locationId: (string | null) = null): EmergencyLocations {
    return new EmergencyLocations(this, locationId);
  }

  messageStoreReport(taskId: (string | null) = null): MessageStoreReport {
    return new MessageStoreReport(this, taskId);
  }

  extensionBulkUpdate(): ExtensionBulkUpdate {
    return new ExtensionBulkUpdate(this);
  }

  callMonitoringGroups(groupId: (string | null) = null): CallMonitoringGroups {
    return new CallMonitoringGroups(this, groupId);
  }

  addressBookBulkUpload(): AddressBookBulkUpload {
    return new AddressBookBulkUpload(this);
  }

  messageStoreConfiguration(): MessageStoreConfiguration {
    return new MessageStoreConfiguration(this);
  }

  emergencyAddressAutoUpdate(): EmergencyAddressAutoUpdate {
    return new EmergencyAddressAutoUpdate(this);
  }
}
export default Index;
