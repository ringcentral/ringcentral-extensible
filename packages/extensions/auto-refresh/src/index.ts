import type RingCentral from "@rc-ex/core";
import SdkExtension from "@rc-ex/core/SdkExtension";

export interface AutoRefreshOptions {
  interval: number;
}

class AutoRefreshExtension extends SdkExtension {
  public rc!: RingCentral;
  public options: AutoRefreshOptions;
  private timeout?: NodeJS.Timeout;

  public constructor(
    options: AutoRefreshOptions = { interval: 1000 * 60 * 30 },
  ) {
    super();
    this.options = options;
  }

  public async install(rc: RingCentral) {
    this.rc = rc;
  }

  public start() {
    this.stop(); // stop existing
    this.timeout = setInterval(() => {
      this.rc.refresh();
    }, this.options.interval);
  }

  public stop() {
    if (this.timeout) {
      clearInterval(this.timeout);
      this.timeout = undefined;
    }
  }

  public async revoke(): Promise<void> {
    this.stop();
  }
}

export default AutoRefreshExtension;
