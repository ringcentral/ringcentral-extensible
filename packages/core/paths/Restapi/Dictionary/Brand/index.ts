import ContractedCountry from './ContractedCountry';
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
    return `${this.parent.path()}/brand`;
  }

  contractedCountry(
    contractedCountryId: string | null = null
  ): ContractedCountry {
    return new ContractedCountry(this, contractedCountryId);
  }
}
export default Index;
