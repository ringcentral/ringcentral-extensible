import LicenseAssignmentEntry from './LicenseAssignmentEntry';

/**
 * Request to assign/unassign licenses
*/
interface BulkManageLicensesRequest {
  /**
   */
  assignedLicenses?: LicenseAssignmentEntry[];

  /**
   */
  unassignedLicenses?: LicenseAssignmentEntry[];
}

export default BulkManageLicensesRequest;
