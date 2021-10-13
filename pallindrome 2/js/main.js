// // document.querySelector('#clickMe').addEventListener('click', makeReq)

// // function makeReq(){

// //   const userName = document.querySelector("#userName").value;

// //   fetch(`/api?student=${userName}`)
// //     .then(response => response.json())
// //     .then((data) => {
// //       console.log(data);
// //       document.querySelector("#personName").textContent = data.name
// //       document.querySelector("#personStatus").textContent = data.status
// //       document.querySelector("#personOccupation").textContent = data.currentOccupation
// //     });

// }

function checkPal() {

  document.querySelector('.drome').innerText = ""

  let word = document.querySelector('input').value;

  fetch(`/api?word=${word}`)

  .then(response => response.json())
       

        .then(data => {

            document.querySelector('.drome').innerText = ""

            document.querySelector('#word').innerText = ""

            if(data['result']) {

                setTimeout(() => {

                document.querySelector('.drome').innerText = "You have found a palidrone."

                document.querySelector('#word').innerText = data['reversedWord']

            }, 200)

            } else {

                setTimeout(() => {

                    document.querySelector('.drome').innerText = "Sorry, you did not find a palindrome."

                    document.querySelector('#word').innerText = data['reversedWord']

                }, 200)
            }
        });
}

function clearValues() {
    document.querySelector('input').value = ""
    document.querySelector('.pal').innerText = ""
    document.querySelector('#word').innerText = ""

}


document.querySelector('#clickMe').addEventListener('click', checkPal)

document.querySelector('#clear').addEventListener('click', checkPal)

document.querySelector('input').addEventListener('keypress', checkPal)

// document.getElementById("clickMe").onclick = makeReq;
//
// function makeReq(){
//
//   var userName = document.getElementById("userName").value;
//
//   var request = new XMLHttpRequest();
//   request.open('GET', '/api?student='+userName, true);
//
//   request.onload = function() {
//       console.log("works")
//       if (request.status >= 200 && request.status < 400) {
//         // Success!
//         var data = JSON.parse(request.responseText);
//         console.log(data)
//         document.getElementById("personName").innerHTML = data.name
//         document.getElementById("personStatus").innerHTML = data.status
//         document.getElementById("personOccupation").innerHTML = data.currentOccupation
//
//       } else {
//         // We reached our target server, but it returned an error
//
//       }
//     };
//
//     request.onerror = function() {
//       // There was a connection error of some sort
//     };
//
//     request.send();
// }
