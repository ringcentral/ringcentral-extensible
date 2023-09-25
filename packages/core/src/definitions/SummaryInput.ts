import type SummaryUnit from './SummaryUnit';

interface SummaryInput {
  /**
   * Type of summary to be computed
   * Required
   * Example: AbstractiveShort
   */
  summaryType?: 'Extractive' | 'AbstractiveShort' | 'AbstractiveLong' | 'AbstractiveAll' | 'All';

  /**
   * Required
   */
  utterances?: SummaryUnit[];
}

export default SummaryInput;
