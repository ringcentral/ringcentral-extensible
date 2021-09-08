import RingCentral from './index';

abstract class SdkExtension {
  enabled = true;
  enable() {
    this.enabled = true;
  }
  disable() {
    this.enabled = false;
  }
  abstract install(rc: RingCentral): Promise<void>;
  async revoke(): Promise<void> {}
}

export default SdkExtension;
