import Contact from './Contact';
import { RingCentralInterface, ParentInterface } from '../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/address-book`;
  }

  contact(contactId: (string | null) = null): Contact {
    return new Contact(this, contactId);
  }
}
export default Index;
