import RingCentral from '..';

abstract class SdkExtension {
  abstract install(rc: RingCentral): void;
}

export default SdkExtension;
