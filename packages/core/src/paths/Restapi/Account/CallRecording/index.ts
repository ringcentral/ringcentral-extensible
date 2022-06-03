import CustomGreetings from './CustomGreetings';
import BulkAssign from './BulkAssign';
import Extensions from './Extensions';
import CallRecordingSettingsResource from '../../../../definitions/CallRecordingSettingsResource';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/call-recording`;
  }

  /**
   * Returns call recording settings.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/call-recording
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   * User Permission: ReadCompanyInfo
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<CallRecordingSettingsResource> {
    const r = await this.rc.get<CallRecordingSettingsResource>(this.path(), undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Updates current call recording settings.
   * HTTP Method: put
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/call-recording
   * Rate Limit Group: Medium
   * App Permission: EditAccounts
   * User Permission: EditCompanyInfo
   */
  async put(callRecordingSettingsResource: CallRecordingSettingsResource, restRequestConfig?: RestRequestConfig): Promise<CallRecordingSettingsResource> {
    const r = await this.rc.put<CallRecordingSettingsResource>(this.path(), callRecordingSettingsResource, undefined, restRequestConfig);
    return r.data;
  }

  extensions(): Extensions {
    return new Extensions(this);
  }

  bulkAssign(): BulkAssign {
    return new BulkAssign(this);
  }

  customGreetings(greetingId: (string | null) = null): CustomGreetings {
    return new CustomGreetings(this, greetingId);
  }
}
export default Index;
