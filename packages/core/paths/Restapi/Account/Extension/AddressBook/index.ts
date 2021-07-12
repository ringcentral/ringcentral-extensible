import Contact from './Contact';
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
    return `${this.parent.path()}/address-book`;
  }

  contact(contactId: string | null = null): Contact {
    return new Contact(this, contactId);
  }
}
export default Index;
