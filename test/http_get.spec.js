/* eslint-env jest */
import RestClient from '../src/index'

describe('HTTP GET', () => {
  test('get extension info', async () => {
    const rc = new RestClient(process.env.RINGCENTRAL_CLIENT_ID, process.env.RINGCENTRAL_CLIENT_SECRET, process.env.RINGCENTRAL_SERVER_URL)
    await rc.authorize(process.env.RINGCENTRAL_USERNAME, process.env.RINGCENTRAL_EXTENSION, process.env.RINGCENTRAL_PASSWORD)
    const r = await rc.get('/restapi/v1.0/account/~/extension/~')
    console.log(r)
  })
})
