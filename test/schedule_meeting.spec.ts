/* eslint-env jest */
import RestClient from '../src/index';
import {
  MeetingRequestResource,
  MeetingScheduleResource,
  TimezoneResource,
  HostInfoRequest,
} from '../src/definitions';

jest.setTimeout(64000);

describe('schedule meeting', () => {
  test('for myself', async () => {
    const rc = new RestClient({
      clientId: process.env.RINGCENTRAL_CLIENT_ID!,
      clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET!,
      server: process.env.RINGCENTRAL_SERVER_URL!,
    });
    await rc.login({
      username: process.env.RINGCENTRAL_USERNAME!,
      extension: process.env.RINGCENTRAL_EXTENSION!,
      password: process.env.RINGCENTRAL_PASSWORD!,
    });

    let meetingsList = await rc
      .restapi()
      .account()
      .extension()
      .meeting()
      .list();
    const count = meetingsList.records!.length;

    // schedule a meeting
    const meetingRequestResource = new MeetingRequestResource();
    meetingRequestResource.topic = 'test meeting';
    meetingRequestResource.meetingType = 'Scheduled';
    const meetingScheduleResource = new MeetingScheduleResource();
    // the format is important! wrong format won't work at all!
    // new Date(new Date().getTime() + 10 * 24 * 60 * 60 * 1000).toISOString()  does NOT work, wrong format
    meetingScheduleResource.startTime = meetingScheduleResource.startTime =
      '2030-05-01T00:01:49Z';
    meetingScheduleResource.durationInMinutes = 30;
    const timezoneResource = new TimezoneResource();
    timezoneResource.id = '58';
    meetingScheduleResource.timeZone = timezoneResource;
    meetingRequestResource.schedule = meetingScheduleResource;
    const meetingResponseResource = await rc
      .restapi()
      .account()
      .extension()
      .meeting()
      .post(meetingRequestResource);
    meetingsList = await rc.restapi().account().extension().meeting().list();
    expect(meetingsList.records!.length).toBe(count + 1);

    // don't forget to clean up
    await rc
      .restapi()
      .account()
      .extension()
      .meeting(meetingResponseResource.id)
      .delete();
    meetingsList = await rc.restapi().account().extension().meeting().list();
    expect(meetingsList.records!.length).toBe(count);
  });

  test('for others', async () => {
    const rc = new RestClient({
      clientId: process.env.RINGCENTRAL_CLIENT_ID!,
      clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET!,
      server: process.env.RINGCENTRAL_SERVER_URL!,
    });
    await rc.login({
      username: process.env.RINGCENTRAL_USERNAME!,
      extension: process.env.RINGCENTRAL_EXTENSION!,
      password: process.env.RINGCENTRAL_PASSWORD!,
    });
    const rc102 = new RestClient({
      clientId: process.env.RINGCENTRAL_CLIENT_ID!,
      clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET!,
      server: process.env.RINGCENTRAL_SERVER_URL!,
    });
    await rc102.login({
      username: process.env.RINGCENTRAL_USERNAME!,
      extension: '102',
      password: process.env.RINGCENTRAL_PASSWORD!,
    });

    const ext102 = await rc102.restapi().account().extension().get();

    let meetingsList101 = await rc
      .restapi()
      .account()
      .extension()
      .meeting()
      .list();
    const count101 = meetingsList101.records!.length;
    let meetingsList102 = await rc102
      .restapi()
      .account()
      .extension()
      .meeting()
      .list();
    const count102 = meetingsList102.records!.length;

    // schedule a meeting
    const meetingRequestResource = new MeetingRequestResource();
    meetingRequestResource.topic = 'test meeting';
    meetingRequestResource.meetingType = 'Scheduled';
    const meetingScheduleResource = new MeetingScheduleResource();
    // the format is important! wrong format won't work at all!
    // new Date(new Date().getTime() + 10 * 24 * 60 * 60 * 1000).toISOString()  does NOT work, wrong format
    meetingScheduleResource.startTime = '2030-05-01T00:01:49Z';
    meetingScheduleResource.durationInMinutes = 30;
    const timezoneResource = new TimezoneResource();
    timezoneResource.id = '58';
    meetingScheduleResource.timeZone = timezoneResource;
    meetingRequestResource.schedule = meetingScheduleResource;
    const hostInfoRequest = new HostInfoRequest();
    hostInfoRequest.id = ext102.id?.toString();
    meetingRequestResource.host = hostInfoRequest;
    const meetingResponseResource = await rc
      .restapi()
      .account()
      .extension()
      .meeting()
      .post(meetingRequestResource);

    // don't forget to clean up
    meetingsList101 = await rc.restapi().account().extension().meeting().list();
    expect(meetingsList101.records!.length).toBe(count101 + 1);
    expect(
      meetingsList101.records!.some(r => r.id === meetingResponseResource.id)
    ).toBeTruthy();
    meetingsList102 = await rc102
      .restapi()
      .account()
      .extension()
      .meeting()
      .list();
    expect(meetingsList102.records!.length).toBe(count102 + 1);
    expect(
      meetingsList102.records!.some(r => r.id === meetingResponseResource.id)
    ).toBeTruthy();

    await rc
      .restapi()
      .account()
      .extension()
      .meeting(meetingResponseResource.id)
      .delete();

    meetingsList101 = await rc.restapi().account().extension().meeting().list();
    expect(meetingsList101.records!.length).toBe(count101);
    expect(
      meetingsList101.records!.some(r => r.id === meetingResponseResource.id)
    ).toBeFalsy();
    meetingsList102 = await rc102
      .restapi()
      .account()
      .extension()
      .meeting()
      .list();
    expect(meetingsList102.records!.length).toBe(count102);
    expect(
      meetingsList102.records!.some(r => r.id === meetingResponseResource.id)
    ).toBeFalsy();
  });
});
