import type { RingCentralInterface } from './types';

abstract class SdkExtension {
  public enabled = true;

  public enable() {
    this.enabled = true;
  }

  public disable() {
    this.enabled = false;
  }

  public abstract install(rc: RingCentralInterface): Promise<void>;
  public abstract revoke(): Promise<void>;
}

export default SdkExtension;
