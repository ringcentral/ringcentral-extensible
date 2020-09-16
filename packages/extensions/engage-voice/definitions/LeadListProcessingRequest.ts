import {CampaignLead} from './index';

class LeadListProcessingRequest {
  description?: string;

  dialPriority?: string;

  dncTags?: string[];

  duplicateHandling?: string;

  extendedLeadDataMappings?: object;

  fileContainsHeaders?: boolean;

  fileType?: string;

  listState?: string;

  pageColumnMappings?: object;

  pageNumber?: number;

  quoteChar?: string;

  timeZoneOption?: string;

  transactionId?: string;

  uploadLeads?: CampaignLead[];
}

export default LeadListProcessingRequest;
