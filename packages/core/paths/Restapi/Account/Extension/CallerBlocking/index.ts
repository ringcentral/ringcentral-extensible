import PhoneNumbers from './PhoneNumbers';
import {RestRequestConfig} from '../../../../../Rest';
import {
  CallerBlockingSettings,
  CallerBlockingSettingsUpdate,
} from '../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../..';

class Index {
  rc: RingCentral;
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/caller-blocking`;
  }

  /**
   * Operation: Get Caller Blocking Settings
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-blocking
   */
  async get(config?: RestRequestConfig): Promise<CallerBlockingSettings> {
    const r = await this.rc.get<CallerBlockingSettings>(
      this.path(),
      undefined,
      config
    );
    return r.data;
  }

  /**
   * Operation: Update Caller Blocking Settings
   * Rate Limit Group: Light
   * Http put /restapi/v1.0/account/{accountId}/extension/{extensionId}/caller-blocking
   */
  async put(
    callerBlockingSettingsUpdate: CallerBlockingSettingsUpdate,
    config?: RestRequestConfig
  ): Promise<CallerBlockingSettings> {
    const r = await this.rc.put<CallerBlockingSettings>(
      this.path(),
      callerBlockingSettingsUpdate,
      undefined,
      config
    );
    return r.data;
  }

  phoneNumbers(blockedNumberId: string | null = null): PhoneNumbers {
    return new PhoneNumbers(this, blockedNumberId);
  }
}

export default Index;
