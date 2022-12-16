// import "./App.css";
//Code from VideoSDK documentation
import React, { useEffect, useRef, useState } from "react";
import {
    MeetingProvider,
    MeetingConsumer,
    useMeeting,
    useParticipant,
} from "@videosdk.live/react-sdk";
import { authToken, createMeeting } from "../API";

function JoinScreen() {
    return null;
}

function VideoComponent(props) {
    return null;
}

function Controls(props) {
    return null;
}

function Container(props) {
    return null;
}

function Call() {
    const [meetingId, setMeetingId] = useState(null);

    const getMeetingAndToken = async (id) => {
        const meetingId =
            id == null ? await createMeeting({ token: authToken }) : id;
        setMeetingId(meetingId);
    };

    return authToken && meetingId ? (
        <MeetingProvider
            config={{
                meetingId,
                micEnabled: true,
                webcamEnabled: false,
                name: "Elyse Horan",
            }}
            token={authToken}>
            <MeetingConsumer>
                {() => <Container meetingId={meetingId} />}
            </MeetingConsumer>
        </MeetingProvider>
    ) : (
        <JoinScreen getMeetingAndToken={getMeetingAndToken} />
    );
}

export default Call;


function JoinScreen({ getMeetingAndToken }) {
    const [meetingId, setMeetingId] = useState(null);
    const onClick = async () => {
        await getMeetingAndToken(meetingId);
    };
    return (
        <div>
            <input
                type="text"
                placeholder="Enter Meeting Id"
                onChange={(e) => {
                    setMeetingId(e.target.value);
                }}
            />
            <button onClick={onClick}>Join</button>
            {" or "}
            <button onClick={onClick}>Create Meeting</button>
        </div>
    );
}


function Container(props) {
    const [joined, setJoined] = useState(false);
    const { join } = useMeeting();
    const { participants } = useMeeting();
    const joinMeeting = () => {
        setJoined(true);
        join();
    };

    return (
        <div className="container">
            <h3>Meeting Id: {props.meetingId}</h3>
            {joined ? (
                <div>
                    <Controls />
                    {[...participants.keys()].map((participantId) => (
                        <VideoComponent participantId={participantId} />
                    ))}
                </div>
            ) : (
                <button onClick={joinMeeting}>Join</button>
            )}
        </div>
    );
}


function Controls() {
    const { leave, toggleMic, toggleWebcam } = useMeeting();
    return (
        <div>
            <button onClick={leave}>Leave</button>
            <button onClick={toggleMic}>toggleMic</button>
            <button onClick={toggleWebcam}>toggleWebcam</button>
        </div>
    );
}

const webcamRef = useRef(null);
const micRef = useRef(null);

const { webcamStream, micStream, webcamOn, micOn } = useParticipant(
    props.participantId
);


const mediaStream = new MediaStream();
mediaStream.addTrack(webcamStream.track);

webcamRef.current.srcObject = mediaStream;
webcamRef.current
    .play()
    .catch((error) => console.error("videoElem.current.play() failed", error));


function VideoComponent(props) {
    const micRef = useRef(null);
    const { webcamStream, micStream, webcamOn, micOn, isLocal } = useParticipant(
        props.participantId
    );

    const videoStream = useMemo(() => {
        if (webcamOn) {
            const mediaStream = new MediaStream();
            mediaStream.addTrack(webcamStream.track);
            return mediaStream;
        }
    }, [webcamStream, webcamOn]);

    useEffect(() => {
        if (micRef.current) {
            if (micOn) {
                const mediaStream = new MediaStream();
                mediaStream.addTrack(micStream.track);

                micRef.current.srcObject = mediaStream;
                micRef.current
                    .play()
                    .catch((error) =>
                        console.error("videoElem.current.play() failed", error)
                    );
            } else {
                micRef.current.srcObject = null;
            }
        }
    }, [micStream, micOn]);

    return (
        <div key={props.participantId}>
            {micOn && micRef && <audio ref={micRef} autoPlay muted={isLocal} />}
            {webcamOn && (
                <ReactPlayer
                    //
                    playsinline // very very imp prop
                    pip={false}
                    light={false}
                    controls={true}
                    muted={true}
                    playing={true}
                    //
                    url={videoStream}
                    //
                    height={"100px"}
                    width={"100px"}
                    onError={(err) => {
                        console.log(err, "participant video error");
                    }}
                />
            )}
        </div>
    );
}
