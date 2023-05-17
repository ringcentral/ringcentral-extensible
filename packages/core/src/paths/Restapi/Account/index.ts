import EmergencyAddressAutoUpdate from './EmergencyAddressAutoUpdate';
import MessageStoreConfiguration from './MessageStoreConfiguration';
import AddressBookBulkUpload from './AddressBookBulkUpload';
import CallMonitoringGroups from './CallMonitoringGroups';
import ExtensionBulkUpdate from './ExtensionBulkUpdate';
import MessageStoreReport from './MessageStoreReport';
import EmergencyLocations from './EmergencyLocations';
import PagingOnlyGroups from './PagingOnlyGroups';
import ForwardAllCalls from './ForwardAllCalls';
import BusinessAddress from './BusinessAddress';
import CallRecording from './CallRecording';
import BusinessHours from './BusinessHours';
import AnsweringRule from './AnsweringRule';
import AssignedRole from './AssignedRole';
import CallLogSync from './CallLogSync';
import CustomFields from './CustomFields';
import ActiveCalls from './ActiveCalls';
import ServiceInfo from './ServiceInfo';
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
import Device from './Device';
import Sites from './Sites';
import GetAccountInfoResponse from '../../../definitions/GetAccountInfoResponse';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public accountId: string | null;

  public constructor(_parent: ParentInterface, accountId: string | null = '~') {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.accountId = accountId;
  }

  public path(withParameter = true): string {
    if (withParameter && this.accountId !== null) {
      return `${this._parent.path()}/account/${this.accountId}`;
    }
    return `${this._parent.path()}/account`;
  }

  /**
   * Returns basic information about a particular RingCentral
 * customer account.
 *
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   * User Permission: ReadCompanyInfo
   */
  public async get(restRequestConfig?: RestRequestConfig): Promise<GetAccountInfoResponse> {
    if (this.accountId === null) {
      throw new Error('accountId must be specified.');
    }
    const r = await this.rc.get<GetAccountInfoResponse>(this.path(), undefined, restRequestConfig);
    return r.data;
  }

  public sites(siteId: (string | null) = null): Sites {
    return new Sites(this, siteId);
  }

  public device(deviceId: (string | null) = null): Device {
    return new Device(this, deviceId);
  }

  public a2pSms(): A2pSms {
    return new A2pSms(this);
  }

  public callLog(callRecordId: (string | null) = null): CallLog {
    return new CallLog(this, callRecordId);
  }

  public presence(): Presence {
    return new Presence(this);
  }

  public greeting(): Greeting {
    return new Greeting(this);
  }

  public directory(): Directory {
    return new Directory(this);
  }

  public telephony(): Telephony {
    return new Telephony(this);
  }

  public recording(recordingId: (string | null) = null): Recording {
    return new Recording(this, recordingId);
  }

  public extension(extensionId: (string | null) = '~'): Extension {
    return new Extension(this, extensionId);
  }

  public templates(templateId: (string | null) = null): Templates {
    return new Templates(this, templateId);
  }

  public ivrMenus(ivrMenuId: (string | null) = null): IvrMenus {
    return new IvrMenus(this, ivrMenuId);
  }

  public userRole(roleId: (string | null) = null): UserRole {
    return new UserRole(this, roleId);
  }

  public auditTrail(): AuditTrail {
    return new AuditTrail(this);
  }

  public ivrPrompts(promptId: (string | null) = null): IvrPrompts {
    return new IvrPrompts(this, promptId);
  }

  public callQueues(groupId: (string | null) = null): CallQueues {
    return new CallQueues(this, groupId);
  }

  public phoneNumber(phoneNumberId: (string | null) = null): PhoneNumber {
    return new PhoneNumber(this, phoneNumberId);
  }

  public serviceInfo(): ServiceInfo {
    return new ServiceInfo(this);
  }

  public activeCalls(): ActiveCalls {
    return new ActiveCalls(this);
  }

  public customFields(fieldId: (string | null) = null): CustomFields {
    return new CustomFields(this, fieldId);
  }

  public callLogSync(): CallLogSync {
    return new CallLogSync(this);
  }

  public assignedRole(): AssignedRole {
    return new AssignedRole(this);
  }

  public answeringRule(ruleId: (string | null) = null): AnsweringRule {
    return new AnsweringRule(this, ruleId);
  }

  public businessHours(): BusinessHours {
    return new BusinessHours(this);
  }

  public callRecording(): CallRecording {
    return new CallRecording(this);
  }

  public businessAddress(): BusinessAddress {
    return new BusinessAddress(this);
  }

  public forwardAllCalls(): ForwardAllCalls {
    return new ForwardAllCalls(this);
  }

  public pagingOnlyGroups(pagingOnlyGroupId: (string | null) = null): PagingOnlyGroups {
    return new PagingOnlyGroups(this, pagingOnlyGroupId);
  }

  public emergencyLocations(locationId: (string | null) = null): EmergencyLocations {
    return new EmergencyLocations(this, locationId);
  }

  public messageStoreReport(taskId: (string | null) = null): MessageStoreReport {
    return new MessageStoreReport(this, taskId);
  }

  public extensionBulkUpdate(): ExtensionBulkUpdate {
    return new ExtensionBulkUpdate(this);
  }

  public callMonitoringGroups(groupId: (string | null) = null): CallMonitoringGroups {
    return new CallMonitoringGroups(this, groupId);
  }

  public addressBookBulkUpload(): AddressBookBulkUpload {
    return new AddressBookBulkUpload(this);
  }

  public messageStoreConfiguration(): MessageStoreConfiguration {
    return new MessageStoreConfiguration(this);
  }

  public emergencyAddressAutoUpdate(): EmergencyAddressAutoUpdate {
    return new EmergencyAddressAutoUpdate(this);
  }
}
export default Index;
