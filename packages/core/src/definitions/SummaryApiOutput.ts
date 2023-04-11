import SummaryApiResponse from './SummaryApiResponse';

interface SummaryApiOutput {
  /**
   */
  status?: ('Success' | 'Fail');

  /**
   */
  response?: SummaryApiResponse;
}

export default SummaryApiOutput;
