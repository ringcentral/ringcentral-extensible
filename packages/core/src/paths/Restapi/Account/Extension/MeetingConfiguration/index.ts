import ProfileImage from './ProfileImage';
import { RingCentralInterface, ParentInterface } from '../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/meeting-configuration`;
  }

  profileImage(): ProfileImage {
    return new ProfileImage(this);
  }
}
export default Index;
