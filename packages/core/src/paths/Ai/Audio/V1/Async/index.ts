import SpeakerDiarize from "./SpeakerDiarize/index.js";
import SpeechToText from "./SpeechToText/index.js";
import type { RingCentralInterface, ParentInterface } from "../../../../../types.js";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path(false)}/async`;
  }

  public speechToText(): SpeechToText {
    return new SpeechToText(this);
  }

  public speakerDiarize(): SpeakerDiarize {
    return new SpeakerDiarize(this);
  }
}
export default Index;
