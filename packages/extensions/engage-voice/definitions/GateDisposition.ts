import { Campaign, RemoteHttpService, EmailTemplate } from './index';

class GateDisposition {
  destCampaign?: Campaign;

  dispSoapService?: RemoteHttpService;

  disposition?: string;

  dncTagLabel?: string;

  doNotCall?: boolean;

  dtmfMapping?: string;

  emailDestinations?: string;

  emailTemplate?: EmailTemplate;

  gateDispositionId?: number;

  isComplete?: boolean;

  isContact?: boolean;

  isDefault?: boolean;

  isDisabled?: boolean;

  isRequeued?: number;

  isSuccess?: boolean;

  rank?: number;

  requeueDelay?: number;

  requireNote?: boolean;

  saveSurvey?: boolean;

  setAgentFlag?: boolean;

  timeout?: number;

  xfer?: string;

  xferDest?: string;
}

export default GateDisposition;
