import RingCentral from '.';

abstract class SdkExtension {
  enabled = true;
  abstract async install(rc: RingCentral): Promise<void>;
  async revoke(): Promise<void> {}
}

export default SdkExtension;
