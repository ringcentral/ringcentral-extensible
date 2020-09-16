import {CollectionCampaign, CollectionQuotaTarget} from './index';

class QuotaGroup {
  active?: boolean;

  campaigns?: CollectionCampaign;

  isActive?: boolean;

  quotaGroupId?: number;

  quotaGroupName?: string;

  quotaTargets?: CollectionQuotaTarget;
}

export default QuotaGroup;
