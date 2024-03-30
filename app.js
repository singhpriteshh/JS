// let pencilPrice = 10;
// let erasorPrice = 5;
// console.log("total price is", pencilPrice + erasorPrice, "rupees");
// let output = `the total price ios : ${pencilPrice + erasorPrice} rupees.`;
// console.log(output);

// while(pencilPrice < 30){
//     // pencilPrice += 1;
//     pencilPrice++;
//     console.log(pencilPrice);
// }

// console.log(pencilPrice);

// let a = "green";
// console.log(a < 10);

// if (a == "red") {
//     console.log("stop");
// }
// else if (a == "green") {
//     console.log("goooo");
// }
// else {
//     console.log("start");
// }


// let size = "M";

// if (size == "XL") {
//     console.log("Price is Rs. 250")
// }
// else if (size == "L") {
//     console.log("Price is Rs. 200")
// }
// else if (size == "M") {
//     console.log("Price is Rs. 100")
// }
// else if (size == "S") {
//     console.log("Price is Rs. 50")
// }

// let marks = 24;

// if (marks >= 35) {
//     console.log("pass");
//     if (marks >= 80) {
//         console.log("outstanding");
//     }
//     else {
//         console.log("next time do hard");
//     }
// }
// else {
//     console.log("fail");
// }


// let name = "aingh Pritesh";

// if (name[0] == "a" && name.length > 3) {
//     console.log("it is good string");
// }
// else {
//     console.log("not good");
// }

// let num = 12;

// if ((num % 3 === 0) && ((num + 1 == 15) || (num - 1 == 11))) {
//     console.log("safe");
// }
// else {
//     console.log("unsafe");
// }


// if (true) {
//     console.log("it has true value");
// }
// else {
//     console.log("not true");
// }

// let color = "pink";

// switch (color) {
//     case "red":
//         console.log("stop");
//         break;
//     case "green":
//         console.log("goooooo");
//         break;
//     case "orange":
//         console.log("start");
//         break;
//     default:
//         console.log("light bigad gai");

// }


// let number = 9;

// switch (number) {
//     case 0:
//         console.log("Sunday");
//         break;
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     default :
//         console.log("moj krne bhai sojaa chup chap");
// }



// console.error("are bhai bhai bhai bhai");

// let myName = prompt("enter your name");
// console.log(myName);

// JS Part 2 Question


// Q1
let num = 40;
if (num % 10 == 0) {
    console.log("good");
}
else {
    console.log("bad");
}

// Q2
// let name = prompt("enter your name");
// let age = prompt("enter your age");
// alert("name is:" + name + "age is :" + age);

// Q3
let quarter = 3;
switch (quarter) {
    case 1:
        console.log("January, february, March");
        break;
    case 2:
        console.log("April, May, June");
        break;
    case 3:
        console.log("July, August, September");
        break;
    case 4:
        console.log("october, November, December");
        break;
    default:
        console.log("mahina gyaa tel lene");
}

// Q4
let str = "Anjali";

if((str[0] == "A" || str[0] == "a") && (str.length > 5)){
    console.log("good string");
}
else{
    console.log("bad");
}

// Q5

let a =34;
let b =33;
let c = 56;

if(a > b && a > c){
    console.log("a is largest", a);
}
else if(b > a && b > c){
    console.log("b is largest", b);
}
else{
    console.log(`c is largest : ${c}`);
}

// Q6
let num1 = 2342;
let num2 = 4519;

if(num1%10 == num2%10){
    console.log("it is same", num1%10);
}
else{
    console.log("not same");
}