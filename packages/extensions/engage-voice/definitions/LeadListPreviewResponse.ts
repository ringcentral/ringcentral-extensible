import { LeadListPagePreview } from './index';

class LeadListPreviewResponse {
  mappingColumns?: string[];

  pagePreviews?: LeadListPagePreview[];

  transactionId?: string;
}

export default LeadListPreviewResponse;
