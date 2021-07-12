import ProfileImage from './ProfileImage';
import Parent from '..';
import RingCentral from '../../../../..';

class Index {
  rc: RingCentral;
  parent: Parent;

  constructor(parent: Parent) {
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
