import AnalyzeInteraction from './AnalyzeInteraction';
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

  analyzeInteraction(): AnalyzeInteraction {
    return new AnalyzeInteraction(this);
  }
}
export default Index;
