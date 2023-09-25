import type LicensesStatisticsResponseItem from './LicensesStatisticsResponseItem';

/**
 * Returns the list of recurring licenses on the account
 */
interface LicensesStatisticsResponse {
  /**
   * Required
   */
  licenses?: LicensesStatisticsResponseItem[];
}

export default LicensesStatisticsResponse;
