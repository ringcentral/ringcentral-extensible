import SessionLivestreamMinimalModel from "./SessionLivestreamMinimalModel.js";

interface SessionLivestreamListModel {
  /**
   * The list of livestreams configured for the session
   */
  livestreams?: SessionLivestreamMinimalModel[];
}

export default SessionLivestreamListModel;
