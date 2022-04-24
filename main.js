// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.getElementById('modal').className = "hidden"

const hearts = document.querySelectorAll('.like-glyph')

for (const element of hearts){
  element.addEventListener('click', (event) => clickHandler(event))
}

function clickHandler(event){
  serverCall(event)
}

function serverCall(event) {
  mimicServerCall()
  .then((response) => {
    if (event.target.className === 'activated-heart') {
      event.target.className = 'like-glyph'
      event.target.innerText = EMPTY_HEART
    } else{
      event.target.className = 'activated-heart'
      event.target.innerText = FULL_HEART
    }
  })
  // ERROR HANDLER
  .catch((error) => {
    console.log(error)
    document.getElementById('modal').hidden = false
    setTimeout(() => {
      document.getElementById('modal').hidden = true
    }, 3000)
  })

}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------
// This function will "mock" the behavior of a backend server. You will
// invoke mimicServerCall() in response to a user action, and the function
// will randomly return either a "success" or "fail" response. Your code
// will then need to handle the response appropriately: updating the
// appearance of the heart if it returns a "successful" response, and
// displaying an error in the DOM otherwise.

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
