import type CallRecordingExtensionResource from "./CallRecordingExtensionResource";

interface BulkAccountCallRecordingsResource {
  /** */
  addedExtensions?: CallRecordingExtensionResource[];

  /** */
  updatedExtensions?: CallRecordingExtensionResource[];

  /** */
  removedExtensions?: CallRecordingExtensionResource[];
}

export default BulkAccountCallRecordingsResource;
