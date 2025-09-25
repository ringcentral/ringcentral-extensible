import EmergencyAddressAutoUpdate from "./EmergencyAddressAutoUpdate/index.js";
import MessageStoreConfiguration from "./MessageStoreConfiguration/index.js";
import AddressBookBulkUpload from "./AddressBookBulkUpload/index.js";
import MessageStoreTemplates from "./MessageStoreTemplates/index.js";
import CallMonitoringGroups from "./CallMonitoringGroups/index.js";
import CallLogExtractSync from "./CallLogExtractSync/index.js";
import ExtensionBulkUpdate from "./ExtensionBulkUpdate/index.js";
import MessageStoreReport from "./MessageStoreReport/index.js";
import EmergencyLocations from "./EmergencyLocations/index.js";
import PagingOnlyGroups from "./PagingOnlyGroups/index.js";
import ForwardAllCalls from "./ForwardAllCalls/index.js";
import BusinessAddress from "./BusinessAddress/index.js";
import CallRecordings from "./CallRecordings/index.js";
import CallRecording from "./CallRecording/index.js";
import BusinessHours from "./BusinessHours/index.js";
import AnsweringRule from "./AnsweringRule/index.js";
import CallLogSync from "./CallLogSync/index.js";
import AssignedRole from "./AssignedRole/index.js";
import CustomFields from "./CustomFields/index.js";
import ActiveCalls from "./ActiveCalls/index.js";
import ServiceInfo from "./ServiceInfo/index.js";
import PhoneNumber from "./PhoneNumber/index.js";
import CallQueues from "./CallQueues/index.js";
import IvrPrompts from "./IvrPrompts/index.js";
import AuditTrail from "./AuditTrail/index.js";
import UserRole from "./UserRole/index.js";
import IvrMenus from "./IvrMenus/index.js";
import Templates from "./Templates/index.js";
import Recording from "./Recording/index.js";
import Extension from "./Extension/index.js";
import Telephony from "./Telephony/index.js";
import Directory from "./Directory/index.js";
import Presence from "./Presence/index.js";
import Greeting from "./Greeting/index.js";
import CallLog from "./CallLog/index.js";
import A2pSms from "./A2pSms/index.js";
import Device from "./Device/index.js";
import Sites from "./Sites/index.js";
import GetAccountInfoResponse from "../../../definitions/GetAccountInfoResponse.js";
import {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../types.js";

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

  public greeting(): Greeting {
    return new Greeting(this);
  }

  public presence(): Presence {
    return new Presence(this);
  }

  public directory(): Directory {
    return new Directory(this);
  }

  public telephony(): Telephony {
    return new Telephony(this);
  }

  public extension(extensionId: string | null = "~"): Extension {
    return new Extension(this, extensionId);
  }

  public recording(recordingId: string | null = null): Recording {
    return new Recording(this, recordingId);
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

  public assignedRole(): AssignedRole {
    return new AssignedRole(this);
  }

  public callLogSync(): CallLogSync {
    return new CallLogSync(this);
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

  public callLogExtractSync(): CallLogExtractSync {
    return new CallLogExtractSync(this);
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
