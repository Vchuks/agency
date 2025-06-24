






const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

//a
let x1 = ages.sort();
let x2;

if (Array.isArray(ages) == true){
 x2 = Math.min(ages[0]) + " and " + Math.max(ages[9]) + " are the min and max ages. ";
}
else {
x2 = "can't find";
}

console.log(x1);
console.log(x2);

//b
let x3 = (ages[4] + ages[5]) / 2;

console.log(x3);

//c
let sum = 0;
let x4;

for(let x = 0; x < ages.length; x++){

sum += ages[x];
}

x4 = sum / 10;

console.log(x4);

//d
let x5 = ages[9] - ages[0];

console.log(x5);

//e
let minAve = Math.abs(ages[0] - 22.8);
let maxAve = Math.abs(ages[9] - 22.8);
let x6 = minAve === maxAve;

console.log(x6);