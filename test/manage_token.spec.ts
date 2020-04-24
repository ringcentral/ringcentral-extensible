/* eslint-env jest */
import RestClient from '../src/index'

jest.setTimeout(16000)

describe('manage token', () => {
  test('get and set token', async () => {
    const rc = new RestClient(process.env.RINGCENTRAL_CLIENT_ID!, process.env.RINGCENTRAL_CLIENT_SECRET!, process.env.RINGCENTRAL_SERVER_URL!)
    await rc.authorize(process.env.RINGCENTRAL_USERNAME!, process.env.RINGCENTRAL_EXTENSION!, process.env.RINGCENTRAL_PASSWORD!)

    // get token
    const tokenInfo = rc.token

    // optionally save the token somewhere and read it back

    // set token
    rc.token = tokenInfo

    // if you only have the access token string
    // rc.token = {
    //   access_token: '...'
    // }

    const extensionInfo = await rc.restapi().account().extension().get()
    expect(extensionInfo).not.toBeUndefined()
    expect(extensionInfo.id).not.toBeUndefined()
  })
})
