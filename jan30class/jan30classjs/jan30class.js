//exercise 1
/*
const todo = ["work from home", "do homework", "eat dinner"];

todo.push("New task")
todo.shift();

console.log(todo)*/

const num = [1,2,3,4,5,6,7,8,9,10] 
let evenCount = 0;
for (let i = 0; i < num.length; i++ ) {
    if (num[i] % 2 === 0){
        evenCount++;
    }
}

console.log(evenCount)


