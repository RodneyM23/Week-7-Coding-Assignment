console.log("Hello World");
/*Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
Programmatically subtract the value of the first element in the array from the value in the last element of the array.
Do not use numbers to reference the last element, find it programmatically.
ages[7] - ages[0] is not allowed!
Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
Use a loop to iterate through the array and calculate the average age.*/


/* This is the array*/
let ages = [3,9,23,64,2,8,28,93];
console.log("Ages:", ages);
/* How to subtract the first element from the last*/
let minusAge = ages [ages.length - 1] - ages[0];
console.log("minusAge", minusAge);

/* Where i added a number to the array*/
ages.push(75);
console.log("Ages after pushing a new value", ages)
let minusAgePush= ages [ages.length - 1] - ages[0];
console.log("minusAge", minusAgePush);
/* where the loop was iterated and average age calculated */
let sumOfAges = 0;
for(let i =0; i <ages.length; i++){
    sumOfAges += ages[i]
    console.log("index:", "sumOfAges:", sumOfAges);
}
console.log("Total Sum", sumOfAges);
let average = sumOfAges / ages.length;
console.log("Average", average)


/* Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
Use a loop to iterate through the array and calculate the average number of letters per name.
Use a loop to iterate through the array again and concatenate all the names together, separated by space
*/
/* Where array was created */
let names=["Sam", "Tommy","Tim","Sally","Buck","Bob"];
/* Where average was calculated */
let totalChars = 0;
for(let i =0; i < names.length; i++){
    totalChars += names[i].length
    console.log("index",i, "name:",names[i], "totalChars:",totalChars);
    let averageName = totalChars / names.length
    console.log("Average of Names:",averageName)
}
/* Where names were concatenated together and seperated by space*/
let concatNames = "";
for(let i = 0; i < names.length; i++) {
    concatNames = concatNames.concat(names[i] + " ");
    console.log("Names concatenated", concatNames)
}

/*How do you access the last element of any array?*/
console.log(ages[ages.length - 1]);

/* How do you access the first element of any array?*/
console.log(ages[0]);

/*Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
For example:

let names = ["Kelly", "Sam", "Kate"];    // starting with this array
let nameLengths = [5, 3, 4];             // create a new array*/

/* Where array was created and loop   */
let nameLengths = [];
for(let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
    console.log("Name lengths array:", nameLengths);
}

/*Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.*/
let charsTotal = 0;
/* Loop created to iterate over the array and sum of elements calculate */
for(let i = 0; i < nameLengths.length; i++) {
    charsTotal += nameLengths[i];
    console.log("CharsTotal:", charsTotal);

}
/*Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').*/
/* Function with two parameters*/
function concatWords(word,n) {
    console.log("Word Par:",word, "n Par:", n);
    /*repeat added*/
let concat = word.repeat(n);
console.log(concat);
}
concatWords("Hello",3);

/*Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space. */

/* Function created with two parameters*/
function fullName(firstName, lastName) {
let fullName = firstName + " " + lastName;
console.log(fullName);
}
fullName("John", "Smith")

/*Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.*/

/*Where arrays of numbers created*/
let myNumbers=[25,7,30,57,3];
let myNumbers2=[5,3,2,1,8];
/* sum of numbers function created*/
function sumOfNumbersArray(array) {
    let total = 0;
    /* loop created to add the sum of all numbers*/
    for(let i = 0; i < array.length; i++){
       // console.log(i,"Test");
        total += array[i];
        console.log("Total:", total)
    }
    if (total > 100) {
        console.log("Total",total,true);
        return true;
    } else {
        console.log("Total:", total, false);
        return false;
    }
}sumOfNumbersArray(myNumbers);

/*Write a function that takes an array of numbers and returns the average of all the elements in the array.*/
/* Function created to get the average of all elements and for loop*/
function calculateNumbersAverage(array){
    let total = 0;
    for(let i = 0; i < array.length; i++){
        total += array[i];
        console.log("calculate Function, total:",total);
        /* where total divided by array.length*/
        let average = total / array.length 
        console.log("Average of numbers:", average);
        return average;
    }
}
calculateNumbersAverage(myNumbers)

/*Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.*/

/* Arrays*/
let numbers3 =[110,200,300];
let numbers4 = [300,113,300];
/* function*/
function twoAverages(array1, array2) {
console.log("Parameters:", array1, array2);
let total1 = 0;
let total2 = 0;
/* loop created for total1*/
for(const number of array1) {
    total1 += number;
    console.log("Current number loop1:",number, "Total1:",total1);
}
/* loop for total2*/
for (const number of array2) {
    total2 += number;
    console.log("Current number loop2:",number, "Total2:",total2);
}
/* averages calculated*/
let average1 = total1 / array1.length;
let average2 = total2 / array2.length;

console.log("Averages", average1, average2);
/* if statement to return true or false*/
if (average1 > average2) {
    console.log(true);
    return true;
} else if (average1 < average2) {
console.log(false);
return false;
} else {
    console.log("Numbers are equal");
}
}
twoAverages(numbers3, numbers4);

/*Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.*/
/*function created */
function willBuyDrink(isHotOutside, moneyInPocket){
console.log("Parameters", isHotOutside,moneyInPocket);
/* will buy drink if its hot outside and we have over $10.5*/
let buyDrink = isHotOutside === true && moneyInPocket > 10.5;
console.log("Buy a drink?", buyDrink);
return buyDrink;
}
willBuyDrink(true,11)
