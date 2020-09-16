import {
  DateTimeComparableSearchField,
  ComparableSearchField,
  Timezone,
  DateTime,
} from './index';

class CampaignLeadSearchCriteria {
  address1?: string;

  address2?: string;

  agentDispositions?: string[];

  agentId?: number;

  auxData1?: string;

  auxData2?: string;

  auxData3?: string;

  auxData4?: string;

  auxData5?: string;

  callerId?: string;

  campaignIds?: number[];

  city?: string;

  emailAddress?: string;

  externIds?: string[];

  firstName?: string;

  lastName?: string;

  lastPassTimeCriteria?: DateTimeComparableSearchField;

  leadIds?: number[];

  leadPassesCriteria?: ComparableSearchField;

  leadPhoneNum?: string;

  leadPhoneNumbers?: string[];

  leadStates?: string[];

  leadTimezones?: Timezone[];

  listIds?: number[];

  loadedDtsEnd?: DateTime;

  loadedDtsStart?: DateTime;

  nextDialTimeCriteria?: DateTimeComparableSearchField;

  orphanedLeadsOnly?: boolean;

  pendingAgentId?: number;

  physicalStates?: string[];

  suppressed?: string;

  systemDispositions?: string[];

  zip?: string;
}

export default CampaignLeadSearchCriteria;
