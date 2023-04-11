import SpeakerIdentify from './SpeakerIdentify';
import SpeakerDiarize from './SpeakerDiarize';
import SpeechToText from './SpeechToText';
import { RingCentralInterface, ParentInterface } from '../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/async`;
  }

  speechToText(): SpeechToText {
    return new SpeechToText(this);
  }

  speakerDiarize(): SpeakerDiarize {
    return new SpeakerDiarize(this);
  }

  speakerIdentify(): SpeakerIdentify {
    return new SpeakerIdentify(this);
  }
}
export default Index;
