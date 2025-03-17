//Allow user to access website if he is:
//logged in from email
//logged in from Google
//logged in from Facebook

var email = true;
var google = false;
var facebook = false;

if (email || google || facebook) {
  console.log("You are allowed to access the website");
} else {
  console.log("You are not allowed to access the website");
}
//output:- You are allowed to access the website 
