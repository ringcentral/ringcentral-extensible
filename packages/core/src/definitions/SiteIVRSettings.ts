import type SiteIVRTopMenu from './SiteIVRTopMenu';
import type SiteIvrActions from './SiteIvrActions';

interface SiteIVRSettings {
  /**
   */
  topMenu?: SiteIVRTopMenu;

  /**
   */
  actions?: SiteIvrActions[];
}

export default SiteIVRSettings;
