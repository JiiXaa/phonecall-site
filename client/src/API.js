//Code from VideoSDK documentation
export const authToken = process.env.REACT_APP_TOKEN;
export const createMeeting = async ({ token }) => {
  const res = await fetch(`https://api.videosdk.live/v1/meetings`, {
    method: "POST",
    headers: {
      authorization: `${authToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });

  const { meetingId } = await res.json();
  return meetingId;
};
