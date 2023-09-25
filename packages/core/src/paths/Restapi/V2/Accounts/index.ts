import SendActivationEmail from './SendActivationEmail';
import SendWelcomeEmail from './SendWelcomeEmail';
import BatchProvisioning from './BatchProvisioning';
import DeviceInventory from './DeviceInventory';
import PhoneNumbers from './PhoneNumbers';
import Extensions from './Extensions';
import Licenses from './Licenses';
import Devices from './Devices';
import type AccountInfo from '../../../../definitions/AccountInfo';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../types';

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
      return `${this._parent.path()}/accounts/${this.accountId}`;
    }
    return `${this._parent.path()}/accounts`;
  }

  /**
   * Returns basic information about particular RingCentral account
   * HTTP Method: get
   * Endpoint: /restapi/v2/accounts/{accountId}
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   * User Permission: ReadCompanyInfo
   */
  public async get(restRequestConfig?: RestRequestConfig): Promise<AccountInfo> {
    if (this.accountId === null) {
      throw new Error('accountId must be specified.');
    }
    const r = await this.rc.get<AccountInfo>(this.path(), undefined, restRequestConfig);
    return r.data;
  }

  public devices(): Devices {
    return new Devices(this);
  }

  public licenses(): Licenses {
    return new Licenses(this);
  }

  public extensions(): Extensions {
    return new Extensions(this);
  }

  public phoneNumbers(phoneNumberId: string | null = null): PhoneNumbers {
    return new PhoneNumbers(this, phoneNumberId);
  }

  public deviceInventory(): DeviceInventory {
    return new DeviceInventory(this);
  }

  public batchProvisioning(): BatchProvisioning {
    return new BatchProvisioning(this);
  }

  public sendWelcomeEmail(): SendWelcomeEmail {
    return new SendWelcomeEmail(this);
  }

  public sendActivationEmail(): SendActivationEmail {
    return new SendActivationEmail(this);
  }
}
export default Index;
