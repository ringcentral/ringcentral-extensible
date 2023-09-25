import ContractedCountry from './ContractedCountry';
import type { RingCentralInterface, ParentInterface } from '../../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public brandId: string | null;

  public constructor(_parent: ParentInterface, brandId: string | null = null) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.brandId = brandId;
  }

  public path(withParameter = true): string {
    if (withParameter && this.brandId !== null) {
      return `${this._parent.path()}/brand/${this.brandId}`;
    }
    return `${this._parent.path()}/brand`;
  }

  public contractedCountry(contractedCountryId: string | null = null): ContractedCountry {
    return new ContractedCountry(this, contractedCountryId);
  }
}
export default Index;
