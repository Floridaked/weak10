// for (let i=1; i<=10; i++){
//     num = 2 **i;
//     console.log(num);
// }
// let i=1;
// while (i<11){
//     num = 2 **i;
//     i++;
//     console.log(num);
// }

// let numberedInput;
// let input = "";
// do{
// input = prompt("what is your name"); // always return a string
// console.log(Number (input));
// numberedInput = Number(input);
// }
// while(!isNaN(numberedInput)) //if user enters a number the result of Number() is a number, else it is NaN

// alert("Hello, " + input);
// alert(`Hello, ${input}`);


// let fruits = ['Apple','Banana','Strawberry'];

// let Orange = fruits.push('Orange');
// console.log(Orange);

// fruits.pop();
// fruits.unshift('Mango');
// fruits.shift();

// console.log(fruits);

let fruits = ['Apple','Banana','Strawberry','Mango','Orange'];


for (let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}

for (let item of fruits){
    console.log(item);
}