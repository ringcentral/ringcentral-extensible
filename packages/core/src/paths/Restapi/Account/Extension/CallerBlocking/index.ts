import PhoneNumbers from './PhoneNumbers';
import type CallerBlockingSettingsUpdate from '../../../../../definitions/CallerBlockingSettingsUpdate';
import type CallerBlockingSettings from '../../../../../definitions/CallerBlockingSettings';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/caller-blocking`;
  }
  /**
   * Returns the current caller blocking settings of a user.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/caller-blocking
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   * User Permission: ReadBlockedNumbers
   */
  public async get(restRequestConfig?: RestRequestConfig): Promise<CallerBlockingSettings> {
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
  public async put(
    callerBlockingSettingsUpdate: CallerBlockingSettingsUpdate,
    restRequestConfig?: RestRequestConfig,
  ): Promise<CallerBlockingSettings> {
    const r = await this.rc.put<CallerBlockingSettings>(
      this.path(),
      callerBlockingSettingsUpdate,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  public phoneNumbers(blockedNumberId: string | null = null): PhoneNumbers {
    return new PhoneNumbers(this, blockedNumberId);
  }
}
export default Index;
