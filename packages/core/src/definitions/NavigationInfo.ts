import NavigationUri from './NavigationUri';

interface NavigationInfo {
  /**
   */
  firstPage?: NavigationUri;

  /**
   */
  nextPage?: NavigationUri;

  /**
   */
  previousPage?: NavigationUri;

  /**
   */
  lastPage?: NavigationUri;
}

export default NavigationInfo;
