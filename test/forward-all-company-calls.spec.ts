import { createRingCentral } from './utils';

describe('Forward all company calls', () => {
  test('patch', async () => {
    // todo: uncomment, error message: Parameter [extension] value is invalid.
    // const rc = await createRingCentral();
    // const r = await rc.restapi().account().forwardAllCalls().patch({
    //   extension: { id: rc.token?.owner_id },
    //   enabled: false,
    //   callHandlingAction: 'Bypass',
    // });
    // console.log(JSON.stringify(r, null, 2));
    // await rc.revoke();
  });
});
