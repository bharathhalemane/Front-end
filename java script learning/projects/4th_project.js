//Create an application with following roles:
// admin - gets full access
// subadmin - gets access to create/delete courses
// testprep - gets access to create/delete tests
// user - gets access to consume content
//TODO:- Write a code to display the role of the user in the application.

var user = "testprep";

switch (user) {
  case "admin":
    console.log("You get full access");
    break;
  case "subadmin":
    console.log("You get access to create/delete courses");
    break;
  case "testprep":
    console.log("You get access to create/delete tests");
    break;
  case "user":
    console.log("You get access to consume content");
    break;
  default:
    console.log("Trial user");
    break;
}
//output:- You get access to create/delete tests
