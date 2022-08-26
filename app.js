// Explanation
// 1. We store in variables the file names we want to take their extension from
// 2. We use the string method/function .split('.')
// 3. And use .pop() to delete from the string 

let fileName = "system.php";
console.log(fileName.split('.').pop());
let secondfileName = "abc.js";
console.log(secondfileName.split('.').pop());
let thirdfileName = 'graphics.cpp';
console.log(thirdfileName.split('.').pop());
let fourthfileName = 'app.py';
console.log(fourthfileName.split('.').pop());