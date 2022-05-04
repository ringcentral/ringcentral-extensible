import CustomGreetings from './CustomGreetings';
import BulkAssign from './BulkAssign';
import Extensions from './Extensions';
import { RestRequestConfig } from '../../../../Rest';
import { CallRecordingSettingsResource } from '../../../../definitions';
import Parent from '..';
import RingCentral from '../../../..';

class Index {
  rc: RingCentral;

  parent: Parent;

  constructor(parent: Parent) {
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
