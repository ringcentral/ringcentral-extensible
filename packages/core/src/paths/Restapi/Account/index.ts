import EmergencyAddressAutoUpdate from "./EmergencyAddressAutoUpdate/index";
import MessageStoreConfiguration from "./MessageStoreConfiguration/index";
import AddressBookBulkUpload from "./AddressBookBulkUpload/index";
import MessageStoreTemplates from "./MessageStoreTemplates/index";
import CallMonitoringGroups from "./CallMonitoringGroups/index";
import ExtensionBulkUpdate from "./ExtensionBulkUpdate/index";
import MessageStoreReport from "./MessageStoreReport/index";
import EmergencyLocations from "./EmergencyLocations/index";
import PagingOnlyGroups from "./PagingOnlyGroups/index";
import ForwardAllCalls from "./ForwardAllCalls/index";
import BusinessAddress from "./BusinessAddress/index";
import CallRecordings from "./CallRecordings/index";
import CallRecording from "./CallRecording/index";
import BusinessHours from "./BusinessHours/index";
import AnsweringRule from "./AnsweringRule/index";
import AssignedRole from "./AssignedRole/index";
import CallLogSync from "./CallLogSync/index";
import CustomFields from "./CustomFields/index";
import ActiveCalls from "./ActiveCalls/index";
import ServiceInfo from "./ServiceInfo/index";
import PhoneNumber from "./PhoneNumber/index";
import CallQueues from "./CallQueues/index";
import IvrPrompts from "./IvrPrompts/index";
import AuditTrail from "./AuditTrail/index";
import UserRole from "./UserRole/index";
import IvrMenus from "./IvrMenus/index";
import Templates from "./Templates/index";
import Extension from "./Extension/index";
import Recording from "./Recording/index";
import Telephony from "./Telephony/index";
import Directory from "./Directory/index";
import Greeting from "./Greeting/index";
import Presence from "./Presence/index";
import CallLog from "./CallLog/index";
import A2pSms from "./A2pSms/index";
import Device from "./Device/index";
import Sites from "./Sites/index";
import GetAccountInfoResponse from "../../../definitions/GetAccountInfoResponse";
import {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../types";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;
  public accountId: string | null;

  public constructor(_parent: ParentInterface, accountId: string | null = "~") {
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
   * Returns basic information about a particular RingCentral customer account.
   *
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   * User Permission: ReadCompanyInfo
   */
  public async get(
    restRequestConfig?: RestRequestConfig,
  ): Promise<GetAccountInfoResponse> {
    if (this.accountId === null) {
      throw new Error("accountId must be specified.");
    }
    const r = await this.rc.get<GetAccountInfoResponse>(
      this.path(),
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  public sites(siteId: string | null = null): Sites {
    return new Sites(this, siteId);
  }

  public device(deviceId: string | null = null): Device {
    return new Device(this, deviceId);
  }

  public a2pSms(): A2pSms {
    return new A2pSms(this);
  }

  public callLog(callRecordId: string | null = null): CallLog {
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

  public recording(recordingId: string | null = null): Recording {
    return new Recording(this, recordingId);
  }

  public extension(extensionId: string | null = "~"): Extension {
    return new Extension(this, extensionId);
  }

  public templates(templateId: string | null = null): Templates {
    return new Templates(this, templateId);
  }

  public ivrMenus(ivrMenuId: string | null = null): IvrMenus {
    return new IvrMenus(this, ivrMenuId);
  }

  public userRole(roleId: string | null = null): UserRole {
    return new UserRole(this, roleId);
  }

  public auditTrail(): AuditTrail {
    return new AuditTrail(this);
  }

  public ivrPrompts(promptId: string | null = null): IvrPrompts {
    return new IvrPrompts(this, promptId);
  }

  public callQueues(groupId: string | null = null): CallQueues {
    return new CallQueues(this, groupId);
  }

  public phoneNumber(phoneNumberId: string | null = null): PhoneNumber {
    return new PhoneNumber(this, phoneNumberId);
  }

  public serviceInfo(): ServiceInfo {
    return new ServiceInfo(this);
  }

  public activeCalls(): ActiveCalls {
    return new ActiveCalls(this);
  }

  public customFields(fieldId: string | null = null): CustomFields {
    return new CustomFields(this, fieldId);
  }

  public callLogSync(): CallLogSync {
    return new CallLogSync(this);
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

  public callRecording(): CallRecording {
    return new CallRecording(this);
  }

  public callRecordings(): CallRecordings {
    return new CallRecordings(this);
  }

  public businessAddress(): BusinessAddress {
    return new BusinessAddress(this);
  }

  public forwardAllCalls(): ForwardAllCalls {
    return new ForwardAllCalls(this);
  }

  public pagingOnlyGroups(
    pagingOnlyGroupId: string | null = null,
  ): PagingOnlyGroups {
    return new PagingOnlyGroups(this, pagingOnlyGroupId);
  }

  public emergencyLocations(
    locationId: string | null = null,
  ): EmergencyLocations {
    return new EmergencyLocations(this, locationId);
  }

  public messageStoreReport(taskId: string | null = null): MessageStoreReport {
    return new MessageStoreReport(this, taskId);
  }

  public extensionBulkUpdate(): ExtensionBulkUpdate {
    return new ExtensionBulkUpdate(this);
  }

  public callMonitoringGroups(
    groupId: string | null = null,
  ): CallMonitoringGroups {
    return new CallMonitoringGroups(this, groupId);
  }

  public messageStoreTemplates(
    templateId: string | null = null,
  ): MessageStoreTemplates {
    return new MessageStoreTemplates(this, templateId);
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
