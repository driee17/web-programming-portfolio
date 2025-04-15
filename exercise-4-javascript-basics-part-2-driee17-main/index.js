import { v4 as uuidv4 } from 'uuid'; // for generating unique alphanumeric string
import validator from 'validator'; // checks if email is valid
import { appendFileSync } from 'node:fs'; // appends information to a file

// function to create new ID
const generateUniqueID = (fname, lname) => {
    const fname_first = fname.toLowerCase()[0]; // takes the first letter of fname in lowercase
    const lname_lower = lname.toLowerCase(); // lname in lowercase
    const uid = uuidv4().substring(0, 8);   // create a uuidv4 and trim it to 8 characters

    return (fname_first + lname_lower + uid); // returns the generated UID

}

// function to add new account
const addAccount = (userInfo) => {
    // checks if the information has incomplete details
    if (userInfo.length != 4) {
        console.log("Incomplete user information!");
        return false;
    }

    // checks if the name and email fields are empty
    if (userInfo[0] === "" || userInfo[1] === "" || userInfo[2] === ""){
        console.log("Missing information!");
        return false;
    }

    // email validation
    if (!validator.isEmail(userInfo[2])){
        console.log("Invalid email!");
        return false;
    }

    // checks if age is at least 18
    if (userInfo[3] < 18){
        console.log("User must be at least 18!");
        return false;
    }


    // saves the data into the file 'users.txt'
    const uniqueID = generateUniqueID(userInfo[0], userInfo[1]);
    try {
        appendFileSync('users.txt', `${userInfo[0]},${userInfo[1]},${userInfo[2]},${userInfo[3]},${uniqueID}\n`);
        console.log("Account creation successful!");
        return true;
    } catch (err) {
        console.log("Account creation failed!");
        return false;
    } 
}
// exporting the functions for testing
export { addAccount };