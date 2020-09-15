import RingCentral from '@rc-ex/core';
import SdkExtension from '@rc-ex/core/lib/SdkExtension';

class EngageVoiceExtension extends SdkExtension {
  rc!: RingCentral;

  async install(rc: RingCentral) {
    this.rc = rc;
  }
}

export default EngageVoiceExtension;
