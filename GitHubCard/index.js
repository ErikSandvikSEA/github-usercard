/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/ErikSandvikSEA')

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];
const cards = document.querySelector('.cards')

//  Step 3: Create a function that accepts a single object as its only argument,
//           Using DOM methods and properties, create a component that will return the following DOM element:

// <div class="card">
//   <img src={image url of user} />
//   <div class="card-info">
//     <h3 class="name">{users name}</h3>
//     <p class="username">{users user name}</p>
//     <p>Location: {users location}</p>
//     <p>Profile:  
//       <a href={address to users github page}>{address to users github page}</a>
//     </p>
//     <p>Followers: {users followers count}</p>
//     <p>Following: {users following count}</p>
//     <p>Bio: {users bio}</p>
//   </div>
// </div>

const cardCreator = ({ userImageURL, userName, userUsername, userLocation, githubURL, followerCount, followingCount, userBio }) => {

const card = document.createElement('div')
const cardImage = document.createElement('img')
const cardInfo = document.createElement('div')
const cardHeader = document.createElement('h3')
const cardUserName = document.createElement('p')
const cardUserLocation = document.createElement('p')
const cardUserProfile = document.createElement('p')
const cardUserFollowers = document.createElement('p')
const cardUserFollowing = document.createElement('p')
const cardUserBio = document.createElement('p')
const cardLink = document.createElement('a')


card.appendChild(cardImage)
card.appendChild(cardInfo)
cardInfo.appendChild(cardHeader)
cardInfo.appendChild(cardUserName)
cardInfo.appendChild(cardUserLocation)
cardInfo.appendChild(cardUserProfile)
cardInfo.appendChild(cardUserFollowers)
cardInfo.appendChild(cardUserFollowing)
cardInfo.appendChild(cardUserBio)
cardUserProfile.appendChild(cardLink)


card.classList.add('card')
cardInfo.classList.add('card-info')
cardHeader.classList.add('name')
cardUserName.classList.add('username')

cardImage.src = userImageURL
cardHeader.textContent = userName
cardUserName.textContent = userUsername
cardUserLocation.textContent = `Location: ${userLocation}`
cardLink.textContent = githubURL
cardLink.href = githubURL
cardUserProfile.textContent = `Profile: ${cardLink.textContent}`
cardUserFollowing.textContent = `Followers: ${followerCount}`
cardUserFollowing.textContent = `Following: ${followingCount}`
cardUserBio.textContent = `Bio: ${userBio}`


return card
}

const buildCard = (githubUsername) => {
  axios.get(`https://api.github.com/users/${githubUsername}`)
  .then(
    response => {
      const userImageURL = response.data.avatar_url
      const userName = response.data.name
      const userUsername = response.data.login
      const userLocation = response.data.location
      const githubURL = response.data.url 
      const followerCount = response.data.followers 
      const followingCount = response.data.following 
      const userBio = response.data.bio
      const newCard = cardCreator({
        userImageURL: userImageURL, userName: userName, userUsername: userUsername, userLocation: userLocation, githubURL: githubURL, followerCount: followerCount, followingCount: followingCount, userBio: userBio
      })
      cards.appendChild(newCard)
    }
  )
  .catch(
    error => {
    setInterval(function() {alert('Sorry, Please Try Again')}, 5000)
}
  )
}

const testResult = buildCard("ErikSandvikSEA")


/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
