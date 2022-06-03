import ContractedCountry from './ContractedCountry';
import { RingCentralInterface, ParentInterface } from '../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  brandId: string | null;

  constructor(parent: ParentInterface, brandId: string | null = null) {
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

  contractedCountry(contractedCountryId: (string | null) = null): ContractedCountry {
    return new ContractedCountry(this, contractedCountryId);
  }
}
export default Index;
