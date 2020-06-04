import RingCentral from '..';

abstract class SdkExtension {
  enabled = true;
  abstract install(rc: RingCentral): void;
}

export default SdkExtension;
