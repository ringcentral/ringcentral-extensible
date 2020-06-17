import RingCentral from '..';

abstract class SdkExtension {
  enabled = true;
  abstract install(rc: RingCentral): void;
  async revoke(): Promise<void> {}
}

export default SdkExtension;
