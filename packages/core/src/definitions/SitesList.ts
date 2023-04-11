import SiteInfo from './SiteInfo';

interface SitesList {
  /**
   * Link to a sites resource
   * Format: uri
   */
  uri?: string;

  /**
   */
  records?: SiteInfo[];
}

export default SitesList;
