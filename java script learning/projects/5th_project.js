//define a function that can answer the role of a user.
//A user can be on following roles:
// admin - gets full access
// subadmin - gets access to create/delete courses
// testprep - gets access to create/delete tests
// user - gets access to consume content
// other - trail user

//Input:- getUserRole(name, role);


function getUserRole(name, role) { 
    switch (role) {
        case "admin":
            return `${name} gets full access`;
        case "subadmin":
            return `${name} gets access to create/delete courses`;
        case "testprep":
            return `${name} gets access to create/delete tests`;
        case "user":
            return `${name} gets access to consume content`;
        default:
            return `${name} is a trial user`;
    }
}
console.log(getUserRole("Bharath", "admin"));       //output:- Bharath gets full access
console.log(getUserRole("Bharath", "subadmin"));    //output:- Bharath gets access to create/delete courses
console.log(getUserRole("Bharath", "testprep"));    //output:- Bharath gets access to create/delete tests
console.log(getUserRole("Bharath", "user"));        //output:- Bharath gets access to consume content
console.log(getUserRole("Bharath", "other"));       //output:- Bharath is a trial user
