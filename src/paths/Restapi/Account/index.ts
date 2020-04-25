import CustomFields from './CustomFields'
import MeetingRecordings from './MeetingRecordings'
import MessageStoreReport from './MessageStoreReport'
import Telephony from './Telephony'
import Device from './Device'
import CallMonitoringGroups from './CallMonitoringGroups'
import PagingOnlyGroups from './PagingOnlyGroups'
import Department from './Department'
import CallQueues from './CallQueues'
import Templates from './Templates'
import PhoneNumber from './PhoneNumber'
import ServiceInfo from './ServiceInfo'
import BusinessAddress from './BusinessAddress'
import EmergencyLocations from './EmergencyLocations'
import EmergencyAddressAutoUpdate from './EmergencyAddressAutoUpdate'
import CallRecording from './CallRecording'
import IvrMenus from './IvrMenus'
import IvrPrompts from './IvrPrompts'
import Greeting from './Greeting'
import AnsweringRule from './AnsweringRule'
import BusinessHours from './BusinessHours'
import Presence from './Presence'
import Directory from './Directory'
import MessageStoreConfiguration from './MessageStoreConfiguration'
import Recording from './Recording'
import ActiveCalls from './ActiveCalls'
import CallLogSync from './CallLogSync'
import CallLog from './CallLog'
import Extension from './Extension'
import { GetAccountInfoResponse } from '../../../definitions'
import Parent from '..'
import RestClient from '../../..'

class Account {
  rc: RestClient
  accountId: (string | null)
  parent: Parent

  constructor (parent: Parent, accountId: (string | null) = '~') {
    this.parent = parent
    this.rc = parent.rc
    this.accountId = accountId
  }

  path (withParameter: boolean = true): string {
    if (withParameter && this.accountId !== null) {
      return `${this.parent.path()}/account/${this.accountId}`
    }

    return `${this.parent.path()}/account`
  }

  /**
   * Operation: Get Account Info
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/account/{accountId}
   */
  async get (): Promise<GetAccountInfoResponse> {
    if (this.accountId === null) {
      throw new Error('accountId must be specified.')
    }

    return this.rc.get(this.path())
  }

  extension (extensionId: (string | null) = '~'): Extension {
    return new Extension(this, extensionId)
  }

  callLog (callRecordId: (string | null) = null): CallLog {
    return new CallLog(this, callRecordId)
  }

  callLogSync (): CallLogSync {
    return new CallLogSync(this)
  }

  activeCalls (): ActiveCalls {
    return new ActiveCalls(this)
  }

  recording (recordingId: (string | null) = null): Recording {
    return new Recording(this, recordingId)
  }

  messageStoreConfiguration (): MessageStoreConfiguration {
    return new MessageStoreConfiguration(this)
  }

  directory (): Directory {
    return new Directory(this)
  }

  presence (): Presence {
    return new Presence(this)
  }

  businessHours (): BusinessHours {
    return new BusinessHours(this)
  }

  answeringRule (ruleId: (string | null) = null): AnsweringRule {
    return new AnsweringRule(this, ruleId)
  }

  greeting (): Greeting {
    return new Greeting(this)
  }

  ivrPrompts (promptId: (string | null) = null): IvrPrompts {
    return new IvrPrompts(this, promptId)
  }

  ivrMenus (ivrMenuId: (string | null) = null): IvrMenus {
    return new IvrMenus(this, ivrMenuId)
  }

  callRecording (): CallRecording {
    return new CallRecording(this)
  }

  emergencyAddressAutoUpdate (): EmergencyAddressAutoUpdate {
    return new EmergencyAddressAutoUpdate(this)
  }

  emergencyLocations (locationId: (string | null) = null): EmergencyLocations {
    return new EmergencyLocations(this, locationId)
  }

  businessAddress (): BusinessAddress {
    return new BusinessAddress(this)
  }

  serviceInfo (): ServiceInfo {
    return new ServiceInfo(this)
  }

  phoneNumber (phoneNumberId: (string | null) = null): PhoneNumber {
    return new PhoneNumber(this, phoneNumberId)
  }

  templates (templateId: (string | null) = null): Templates {
    return new Templates(this, templateId)
  }

  callQueues (groupId: (string | null) = null): CallQueues {
    return new CallQueues(this, groupId)
  }

  department (departmentId: (string | null) = null): Department {
    return new Department(this, departmentId)
  }

  pagingOnlyGroups (pagingOnlyGroupId: (string | null) = null): PagingOnlyGroups {
    return new PagingOnlyGroups(this, pagingOnlyGroupId)
  }

  callMonitoringGroups (groupId: (string | null) = null): CallMonitoringGroups {
    return new CallMonitoringGroups(this, groupId)
  }

  device (deviceId: (string | null) = null): Device {
    return new Device(this, deviceId)
  }

  telephony (): Telephony {
    return new Telephony(this)
  }

  messageStoreReport (taskId: (string | null) = null): MessageStoreReport {
    return new MessageStoreReport(this, taskId)
  }

  meetingRecordings (): MeetingRecordings {
    return new MeetingRecordings(this)
  }

  customFields (fieldId: (string | null) = null): CustomFields {
    return new CustomFields(this, fieldId)
  }
}

export default Account
