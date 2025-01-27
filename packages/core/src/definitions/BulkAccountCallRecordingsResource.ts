import CallRecordingExtensionResource from "./CallRecordingExtensionResource.js";

interface BulkAccountCallRecordingsResource {
  /** */
  addedExtensions?: CallRecordingExtensionResource[];

  /** */
  updatedExtensions?: CallRecordingExtensionResource[];

  /** */
  removedExtensions?: CallRecordingExtensionResource[];
}

export default BulkAccountCallRecordingsResource;
