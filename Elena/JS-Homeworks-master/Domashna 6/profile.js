async function profileInfo() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
    if (!response.ok) {
      console.log('Error ' + response.statusText)
      return
    }
    var user = await response.json();
    console.log(user)
    changeProfile(user)
    // changeName(user)
    // changeMail(user)
    // changeAbout(user)
  }


function changeProfile(obj) {
    const userName = document.getElementById('profileUsername')
    userName.innerHTML = obj['name']

    const userMail = document.getElementById('profileMail')
    userMail.innerHTML = obj['email']

    const userAbout = document.getElementById('profileAbout')
    userAbout.innerHTML = obj['company']['catchPhrase']

    const userWorkspace = document.getElementById('profileWorkspace')
    userWorkspace.innerHTML = obj['company']['name']

    const userWeb = document.getElementById('profileWeb')
    userWeb.innerHTML = obj['website']

    const userLocation = document.getElementById('profileStreet')
    userLocation.innerHTML = obj['address']['street']

    const userCity = document.getElementById('profileCity')
    userCity.innerHTML = obj['address']['city'] + ', ' +obj['address']['zipcode']
   
}

// function changeMail(obj) {
//     const userMail = document.getElementById('profileMail')
//     userMail.innerHTML = obj['email']
   
// }

// function changeAbout(obj) {
//     const userAbout = document.getElementById('profileAbout')
//     userAbout.innerHTML = obj['company']['catchPhrase']
   
// }



profileInfo()
  


