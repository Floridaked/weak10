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

// let fruits = ['Apple','Banana','Strawberry','Mango','Orange'];


// for (let i=0;i<fruits.length;i++){
//     console.log(fruits[i]);
// }

// for (let item of fruits){
//     console.log(item);
// }

// let student1 = {
//     ID: "A00022",
//     GPA: 3.0,
//     program: "CIT"
// };

// let student2 = {
//     ID: "A01000",
//     GPA: 3.1,
//     program: "CST"
// };

// let student3 = {
//     ID: "A00114",
//     GPA: 3.2,
//     program: "CIT"
// };
// let students = [student1, student2, student3]

// let counter = 0;
// for (let i = 0; i <students.length;i++){
// //for (let item of students){
//     if (item.program === "CIT" && item.GPA>3){
//         console.log(item);
//         counter = counter +1;
//     }
// }
// console.log(counter);

const person = {
    name:['Bob', 'Smith'],
    age:32,
    gender:'male',
    hobbies :['music', 'skiing']
}

for (let key in person){
    console.log(key);
    console.log(person[key]);
}

// console.log(`my name is ${person.name[0]} ${person.name[1]}. I am interested in ${person.hobbies.join(' and ')}.  `)

