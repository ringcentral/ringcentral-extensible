/* eslint-env jest */
import RestClient from '../dist/src/index'

jest.setTimeout(16000)

describe('HTTP GET', () => {
  test('get extension info', async () => {
    const rc = new RestClient(process.env.RINGCENTRAL_CLIENT_ID, process.env.RINGCENTRAL_CLIENT_SECRET, process.env.RINGCENTRAL_SERVER_URL)
    await rc.authorize(process.env.RINGCENTRAL_USERNAME, process.env.RINGCENTRAL_EXTENSION, process.env.RINGCENTRAL_PASSWORD)
    const extensionInfo = await rc.get('/restapi/v1.0/account/~/extension/~')
    expect(extensionInfo).not.toBeUndefined()
    expect(extensionInfo.id).not.toBeUndefined()
  })
})
