import SpeakerIdentify from './SpeakerIdentify';
import SpeakerDiarize from './SpeakerDiarize';
import SpeechToText from './SpeechToText';
import type { RingCentralInterface, ParentInterface } from '../../../../../types';

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

  public speakerIdentify(): SpeakerIdentify {
    return new SpeakerIdentify(this);
  }
}
export default Index;
