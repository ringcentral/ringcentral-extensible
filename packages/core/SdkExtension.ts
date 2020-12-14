import RingCentral from './index';

abstract class SdkExtension {
  _enabled = true;
  get enabled() {
    return this._enabled;
  }
  set enabled(value) {
    this._enabled = value;
  }
  abstract install(rc: RingCentral): Promise<void>;
  async revoke(): Promise<void> {}
}

export default SdkExtension;
