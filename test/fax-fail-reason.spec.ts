import { createRingCentral } from './utils';

describe('fax fail reason', () => {
  test('default', async () => {
    const rc = await createRingCentral();
    const messages = await rc
      .restapi()
      .account()
      .extension()
      .messageStore()
      .list({
        messageType: ['Fax'],
        direction: ['Outbound'],
        dateFrom: '2010-04-15T17:18:00.000Z',
      });
    await rc.revoke();
    const failedFaxes = messages.records?.filter(
      (m) => m.messageStatus === 'SendingFailed',
    );
    for (const failedFax of failedFaxes ?? []) {
      expect(
        failedFax.to?.some((t) => t.faxErrorCode && t.faxErrorCode.length > 0),
      ).toBeTruthy();
    }
  });
});
