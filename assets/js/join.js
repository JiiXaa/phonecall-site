
let createBtn = document.getElementById("meetingJoinButton");

createBtn.addEventListener("click", function () {
           
    const myTimeout = setTimeout(function(){
        let grab_id = document.getElementById("meetingid").value;
        console.log(grab_id);
    }, 5000);
 
});






// // getMeetingIds()

// function getMeetingIds() {
//     let see_id = document.getElementById("meetingid");
//     console.log('meetingId', see_id);
//     // console.log(get_id)
//     // document.getElementById("join-call").textContent = get_id
//     // console.log(get_id)
// }
// // // document.addEventListener
// // // document.getElementById("join-call").textContent = "hey"
// getMeetingIds()
