//exercise 1
/*
const todo = ["work from home", "do homework", "eat dinner"];

todo.push("New task")
todo.shift();

console.log(todo)*/
// exercise 2
/*const num = [1,2,3,4,5,6,7,8,9,10] 
let evenCount = 0;
for (let i = 0; i < num.length; i++ ) {
    if (num[i] % 2 === 0){
        evenCount++;
    }
}

console.log(evenCount)
*/
// finished

//exercise 3
/*
const array = [1,2,3,4,5,6];
let reverse = [];

for (let i = array.length -1; i >= 0; i--){
    reverse.push(array[i]);
}
console.log(reverse);
*/
//exercise 4
/*
const array = [1,2,3,4,5,6]

let largest = array[0];

for (let i = 0; i < array.length; i++) {
    if(array[i] > largest){
        largest = array[i]; 
   }
}
console.log("The largest number is: ", largest);
*/
//exercise 5

const user = ["john"];

function addUser(name) {
    user.push(name);
    console.log(`${name} has been added!`)
    
}


function greetUser(){
    if (user.length > 0 ){
        //console.log(`welcome:`);
        for (let i =0; i <user.length; i++) {
            console.log(`welcome ${user[i]}!`);
        } 
    } else {
     console.log("No users to greet!")} 
}

addUser("jacob");
addUser("jenny")
greetUser();