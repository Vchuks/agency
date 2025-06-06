// Q1
console.log(Math.ceil(parseFloat("9.8")));

// Q2
let x = "python";
let y = "jargon";
let z = x + y;
console.log(z.includes("on"));

// Q3
let a = "i hope this course is not full of jargon";
console.log(a.includes("jargon"));

// Q4
let b = Math.floor(Math.random() * 101);
console.log(b);

// Q5
let c = Math.floor(Math.random() * 101);

if (c < 50){
   c = 50;
}

console.log(c);

// Q6
let grade;
let e = Math.floor(Math. random () *101);

switch (true) {
  case e > 79:
    grade = "A, Excellent";
    break;
  case e > 69:
    grade = "B, Very good";
    break;
  case e > 59:
    grade = "C, Good";
    break;
  case e > 49:
    grade = "D, Poor";
    break;
  case e > -1:
    grade = "F, failed";
    break;
 default:
   grade = "You will repeat this class";  
}

console.log(grade);
console.log(e);
