// import {
//   MeetingRequestResource,
//   MeetingScheduleResource,
//   MeetingsTimezoneResource,
//   HostInfoRequest,
// } from '@rc-ex/core/lib/definitions';

// import {createRingCentral} from './utils';

// meetings has been replaced by RCV
describe('schedule meeting', () => {
  test('for myself', async () => {
    // const rc = await ReusableRestClient.getInstance();
    // // schedule a meeting
    // const meetingRequestResource = new MeetingRequestResource();
    // meetingRequestResource.topic = 'test meeting';
    // meetingRequestResource.meetingType = 'Scheduled';
    // const meetingScheduleResource = new MeetingScheduleResource();
    // // the format is important! wrong format won't work at all!
    // // new Date(new Date().getTime() + 10 * 24 * 60 * 60 * 1000).toISOString()  does NOT work, wrong format
    // meetingScheduleResource.startTime = meetingScheduleResource.startTime =
    //   '2030-05-01T00:01:49Z';
    // meetingScheduleResource.durationInMinutes = 30;
    // const timezoneResource = new MeetingsTimezoneResource();
    // timezoneResource.id = '58';
    // meetingScheduleResource.timeZone = timezoneResource;
    // meetingRequestResource.schedule = meetingScheduleResource;
    // const meetingResponseResource = await rc
    //   .restapi()
    //   .account()
    //   .extension()
    //   .meeting()
    //   .post(meetingRequestResource);
    // // don't forget to clean up
    // await rc
    //   .restapi()
    //   .account()
    //   .extension()
    //   .meeting(meetingResponseResource.id)
    //   .delete();
    // await rc.revoke();
  });

  test('for others', async () => {
    // const rc = await ReusableRestClient.getInstance();
    // const rc2 = new RingCentral({
    //   clientId: process.env.RINGCENTRAL_CLIENT_ID!,
    //   clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET!,
    //   server: process.env.RINGCENTRAL_SERVER_URL!,
    // });
    // await rc2.login({
    //   jwt: process.env.RINGCENTRAL_JWT_TOKEN2!,
    // });
    // const ext2 = await rc2.restapi().account().extension().get();
    // // schedule a meeting
    // const meetingRequestResource = new MeetingRequestResource();
    // meetingRequestResource.topic = 'test meeting';
    // meetingRequestResource.meetingType = 'Scheduled';
    // const meetingScheduleResource = new MeetingScheduleResource();
    // // the format is important! wrong format won't work at all!
    // // new Date(new Date().getTime() + 10 * 24 * 60 * 60 * 1000).toISOString()  does NOT work, wrong format
    // meetingScheduleResource.startTime = '2030-05-01T00:01:49Z';
    // meetingScheduleResource.durationInMinutes = 30;
    // const timezoneResource = new MeetingsTimezoneResource();
    // timezoneResource.id = '58';
    // meetingScheduleResource.timeZone = timezoneResource;
    // meetingRequestResource.schedule = meetingScheduleResource;
    // const hostInfoRequest = new HostInfoRequest();
    // hostInfoRequest.id = ext2.id?.toString();
    // meetingRequestResource.host = hostInfoRequest;
    // const meetingResponseResource = await rc
    //   .restapi()
    //   .account()
    //   .extension()
    //   .meeting()
    //   .post(meetingRequestResource);
    // // don't forget to clean up
    // await rc
    //   .restapi()
    //   .account()
    //   .extension()
    //   .meeting(meetingResponseResource.id)
    //   .delete();
    // await rc.revoke();
    // await rc2.revoke();
  });
});
