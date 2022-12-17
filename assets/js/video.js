
function createMeeting() {
    let meetingId = 'xxxxyxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
    window.location.href = "http://" + window.location.host + "?meetingId=" + meetingId;
}

document.addEventListener("load", function (event) {

    //Get URL query parameters
    const url = new URLSearchParams(window.location.search);

    // const config = {
    //     // ...
    //     meetingId: url.get("meetingId"), // Get meeting id from params.
    //     // ...
    // };

    const meeting = new VideoSDKMeeting();

    const config = {
        name: "Elyse Horan",
        apiKey: "a579cc5b-c3f6-4abc-816b-68650cd2deb9",
        meetingId: "SOCIAL_DEMO",
        redirectOnLeave: "index.html",
        micEnabled: true,
        webcamEnabled: true,
        participantCanToggleSelfWebcam: true,
        participantCanToggleSelfMic: true,
        joinScreen: {
            visible: true, // Show the join screen ?
            title: "Social Quick Start", // Meeting title
            meetingUrl: window.location.href, // Meeting joining url
            // meetingUrl: meetingId,
        },
    };

    meeting.init(config);
});



script.src = "https://sdk.videosdk.live/rtc-js-prebuilt/0.3.23/rtc-js-prebuilt.js";
document.getElementsByTagName("head")[0].appendChild(script);