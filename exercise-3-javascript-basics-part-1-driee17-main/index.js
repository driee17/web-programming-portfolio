/*
Adrian B. Cueto
2020-02461
Exercise 3: JavaScript Basics pt. 1
*/

// validate if 2 passwords match
function validatePassword(pass1, pass2){
    var withUppercase = false;
    var withLowercase = false;
    var withNumber = false;
    // check if both passwords have at least 8 char length and same length
    if (pass1.length != pass2.length || pass1.length < 8){
        return false;
    }

    // check if pass1 have at least 1 number, lowercase, and uppercase letters
    for (let i = 0; i < pass1.length; i++){
        if (!isNaN(pass1[i])){ // if it is a number
            withNumber = true;
        } else if (pass1[i] === pass1[i].toUpperCase()){
            withUppercase = true;
        } else if (pass1[i] === pass1[i].toLowerCase()){
            withLowercase = true;
        }
    }

    // check if both passwords are the same
    for (let i=0; i<pass1.length; i++){
        if (pass1[i] != pass2[i])
            return false;
    }
    if (withUppercase && withLowercase && withNumber) // checks if all required characters are in the password
        return true;
    else 
        return false;
}

// reverses the password
function reversePassword(password){
    var newPassword = ""; // create new string to store reverse password

    for (let i = password.length-1; i>=0; i--){ // for loop to reverse index access
        newPassword += password[i];
    }

    return newPassword;
}

// checks if password is valid and returns an object containing the name and the new reversed password
function storePassword(name, pass1, pass2){
    // check if two passwords are valid
    const isPassValid = validatePassword(pass1, pass2);
    
    // reverses password if both passwords are valid
    if (isPassValid){
        var reversedPW = reversePassword(pass1);
        return {"name": name, "newpassword": reversedPW};
    } else 
        return {"name": name, "newpassword": pass1};
}

console.log(validatePassword("helloasd", "hello"));    // returns false
console.log(validatePassword("hello", "hello"));  	  // returns false
console.log(validatePassword("hello1234", "hello1234"));  // returns false
console.log(validatePassword("Hello1234", "Hello1234"));  // returns true
console.log(validatePassword("HELLO1234", "HELLO1234"));  // returns false

console.log(storePassword("John", "Pass1234", "Pass1234")) // returns {name: "John", newpassword:"4321ssaP"}
console.log(storePassword("John", "Pass123", "Pass12345")) // returns {name: "John", newpassword:"Pass123"}