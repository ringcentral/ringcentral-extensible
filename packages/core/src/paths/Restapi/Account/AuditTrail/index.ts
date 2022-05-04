import Search from './Search';
import Parent from '..';
import RingCentral from '../../../..';

class Index {
  rc: RingCentral;

  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/audit-trail`;
  }

  search(): Search {
    return new Search(this);
  }
}
export default Index;
