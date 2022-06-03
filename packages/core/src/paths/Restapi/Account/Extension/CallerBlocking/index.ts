import PhoneNumbers from './PhoneNumbers';
import CallerBlockingSettingsUpdate from '../../../../../definitions/CallerBlockingSettingsUpdate';
import CallerBlockingSettings from '../../../../../definitions/CallerBlockingSettings';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/caller-blocking`;
  }

  /**
   * Returns the current caller blocking settings of a user.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/caller-blocking
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   * User Permission: ReadBlockedNumbers
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<CallerBlockingSettings> {
    const r = await this.rc.get<CallerBlockingSettings>(this.path(), undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Updates the current caller blocking settings of a user.
   * HTTP Method: put
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/caller-blocking
   * Rate Limit Group: Light
   * App Permission: EditExtensions
   * User Permission: EditBlockedNumbers
   */
  async put(callerBlockingSettingsUpdate: CallerBlockingSettingsUpdate, restRequestConfig?: RestRequestConfig): Promise<CallerBlockingSettings> {
    const r = await this.rc.put<CallerBlockingSettings>(this.path(), callerBlockingSettingsUpdate, undefined, restRequestConfig);
    return r.data;
  }

  phoneNumbers(blockedNumberId: (string | null) = null): PhoneNumbers {
    return new PhoneNumbers(this, blockedNumberId);
  }
}
export default Index;
