import {QuotaGroup, DateTime} from './index';

class QuotaTarget {
  clientMetadata?: string;

  criteriaJs?: string;

  currentCount?: number;

  quotaGroup?: QuotaGroup;

  quotaMetOn?: DateTime;

  quotaTargetId?: number;

  targetCount?: number;

  targetName?: string;
}

export default QuotaTarget;
