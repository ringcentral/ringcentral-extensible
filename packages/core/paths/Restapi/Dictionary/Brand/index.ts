import ContractedCountry from './ContractedCountry';
import Parent from '..';
import { RingCentral } from '../../../..';

class Index {
  rc: RingCentral;

  parent: Parent;

  brandId: string | null;

  constructor(parent: Parent, brandId: string | null = null) {
    this.parent = parent;
    this.rc = parent.rc;
    this.brandId = brandId;
  }

  path(withParameter = true): string {
    if (withParameter && this.brandId !== null) {
      return `${this.parent.path()}/brand/${this.brandId}`;
    }
    return `${this.parent.path()}/brand`;
  }

  contractedCountry(
    contractedCountryId: string | null = null,
  ): ContractedCountry {
    return new ContractedCountry(this, contractedCountryId);
  }
}
export default Index;
