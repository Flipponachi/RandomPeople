var triggerApi = document.querySelector("#btno")
var personImage = document.querySelector("#avatar")
var personFullName = document.querySelector("#fullname")
var personUserName = document.querySelector("#username")
var personEmail = document.querySelector("#email")
var personCity = document.querySelector("#city")

var address = "https://randomuser.me/api/"
triggerApi.addEventListener('click', function(){

    fetch(address)
    .then(function(response){
        return response.json()
        
    })
    .then(function (parsedData){
        //Set Fullname 
        var lastName = parsedData.results[0].name.last;
        var firstName = parsedData.results[0].name.first;
        personFullName.innerHTML = lastName + " " + firstName;
        //Set Username
        var userName = parsedData.results[0].login.username;
        personUserName.innerHTML = userName;
        //Set Email Address
        var userEmailAddress = parsedData.results[0].email;
        personEmail.textContent = userEmailAddress;
        //Set User Location
        var userCity = parsedData.results[0].location.city;
        personCity.innerHTML = userCity;
        //Set Profile Picture
        var userProfilePicture = parsedData.results[0].picture.medium;
        personImage.src = userProfilePicture;
    })
    .catch(function(error){
        console.log("Bad Internet ",error )
    })
    
})//Add event listener ending