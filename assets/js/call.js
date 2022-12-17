
// function createMeeting() {
//     let meetingId = 'xxxxyxxx'.replace(/[xy]/g, function (c) {
//         var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
//         return v.toString(16);
//     });
//     window.location.href = "http://" + window.location.host + "?meetingId=" + meetingId;
// }


var script = document.createElement("script");
script.addEventListener("load", function (event) {

    const meeting = new VideoSDKMeeting();
    
    let meetingId = 'xxxxyxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });

    const config = {
        name: "Max Horan",
        apiKey: "a579cc5b-c3f6-4abc-816b-68650cd2deb9",
        // meetingId: "SOCIAL_DEMO",
        meetingId: meetingId,
        redirectOnLeave: "https://8000-keelbackcod-phonecallsi-z5mt8awxtpb.ws-eu79.gitpod.io/",
        micEnabled: true,
        webcamEnabled: true,
        participantCanToggleSelfWebcam: true,
        participantCanToggleSelfMic: true,
        joinScreen: {
            visible: true, // Show the join screen ?
            title: "Meeting Link", // Meeting title
            meetingUrl: "http://" + window.location.host + "?meetingId=" + meetingId, // Meeting joining url
        },
    };

    meeting.init(config);
});
// console.log(meetingId)
script.src = "https://sdk.videosdk.live/rtc-js-prebuilt/0.3.23/rtc-js-prebuilt.js";
document.getElementsByTagName("head")[0].appendChild(script);


