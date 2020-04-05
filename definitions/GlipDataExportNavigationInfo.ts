import GlipDataExportNavigationInfoUri from './GlipDataExportNavigationInfoUri'

class GlipDataExportNavigationInfo
{
    /**
     * Canonical URI for the first page of the list
     */
    firstPage?: GlipDataExportNavigationInfoUri

    /**
     * Canonical URI for the next page of the list
     */
    nextPage?: GlipDataExportNavigationInfoUri

    /**
     * Canonical URI for the previous page of the list
     */
    previousPage?: GlipDataExportNavigationInfoUri

    /**
     * Canonical URI for the last page of the list
     */
    lastPage?: GlipDataExportNavigationInfoUri
}

export default GlipDataExportNavigationInfo