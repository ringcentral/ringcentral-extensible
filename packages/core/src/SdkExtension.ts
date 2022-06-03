import { RingCentralInterface } from './types';

abstract class SdkExtension {
  enabled = true;

  enable() {
    this.enabled = true;
  }

  disable() {
    this.enabled = false;
  }

  abstract install(rc: RingCentralInterface): Promise<void>;
  abstract revoke(): Promise<void>;
}

export default SdkExtension;
