import SendActivationEmail from "./SendActivationEmail/index.js";
import SendWelcomeEmail from "./SendWelcomeEmail/index.js";
import BatchProvisioning from "./BatchProvisioning/index.js";
import RegionalSettings from "./RegionalSettings/index.js";
import DeviceInventory from "./DeviceInventory/index.js";
import PhoneNumbers from "./PhoneNumbers/index.js";
import CostCenters from "./CostCenters/index.js";
import Extensions from "./Extensions/index.js";
import Devices from "./Devices/index.js";
import Sms from "./Sms/index.js";
import AccountInfo from "../../../../definitions/AccountInfo.js";
import {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../types.js";

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
  public async get(
    restRequestConfig?: RestRequestConfig,
  ): Promise<AccountInfo> {
    if (this.accountId === null) {
      throw new Error("accountId must be specified.");
    }
    const r = await this.rc.get<AccountInfo>(
      this.path(),
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  public sms(): Sms {
    return new Sms(this);
  }

  public devices(deviceId: string | null = null): Devices {
    return new Devices(this, deviceId);
  }

  public extensions(): Extensions {
    return new Extensions(this);
  }

  public costCenters(): CostCenters {
    return new CostCenters(this);
  }

  public phoneNumbers(phoneNumberId: string | null = null): PhoneNumbers {
    return new PhoneNumbers(this, phoneNumberId);
  }

  public deviceInventory(): DeviceInventory {
    return new DeviceInventory(this);
  }

  public regionalSettings(): RegionalSettings {
    return new RegionalSettings(this);
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
