import type LicenseAssignmentResponseEntry from './LicenseAssignmentResponseEntry';

interface BulkManageLicensesResponse {
  /**
   */
  assignedLicenses?: LicenseAssignmentResponseEntry[];

  /**
   */
  unassignedLicenses?: LicenseAssignmentResponseEntry[];
}

export default BulkManageLicensesResponse;
