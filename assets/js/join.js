
let createBtn = document.getElementById("meetingJoinButton");

createBtn.addEventListener("click", function () {

    const myTimeout = setTimeout(function(){
        let grab_id = document.getElementById("meetingid").value;
        console.log(grab_id)
        fetch("/api/meetings", {
            method: "POST",
            body: JSON.stringify({join_id: grab_id}),
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
    }, 5000);

});



