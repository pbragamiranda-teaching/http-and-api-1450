// TODO - Fetch an activity with the Bored API - Let's psuedocode!
const url = 'https://www.boredapi.com/api/activity/'

// Target the button
const button = document.querySelector(".btn-warning")

const insertActivity = (data) => {
  // Select where I want to add my activity
  const activity = document.getElementById("activity")
  // Update text
  activity.innerText = data.activity
}

// BOREDAPI
// add event listener (to click)
button.addEventListener("click", (event) => {
  // const activity = document.getElementById("activity")
  // Ask my API for a random activity
  // fetch by default is a GET
  fetch("http://www.boredapi.com/api/activity/")
  .then(response => response.json())
  .then((data) => {
      // console.log(data.activity);
      // Calls function to update the text
      insertActivity(data);
    });
  })


// WARM UP
  // button.addEventListener("click", (event) => {
  //   // Change the text of the button with one activity
  //   const activities = ["Run a mile", "Read the news", "Do some Yoga"]
  //   const randomIndex = Math.floor(Math.random() * 3)
  //   const activityName = activities[randomIndex]
  //   event.currentTarget.innerText = activityName
  //   event.currentTarget.setAttribute("disabled", "")
  // })

