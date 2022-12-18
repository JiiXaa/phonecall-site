// let createBtn = document.getElementById('meetingJoinButton');

document.addEventListener('DOMContentLoaded', (event) => {
  fetch('/api/meetings')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let meetingList = document.getElementById('meetingList');
      meetingList.innerHTML = '';
      for (let i = 0; i < data.length; i++) {
        let meeting = data[i];
        let meetingItem = document.createElement('li');
        meetingItem.innerHTML = meeting.join_id;
        meetingList.appendChild(meetingItem);
      }
    });
});

const displayMeetingsBtn = document.getElementById('btnAllow');

displayMeetingsBtn.addEventListener('click', function () {
  let grab_id = document.getElementById('meetingid').value;
  console.log(grab_id);
  console.log('stringify', JSON.stringify({ join_id: grab_id }));
  fetch('/api/meetings', {
    method: 'POST',
    body: JSON.stringify({ join_id: grab_id }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
});
