// Assignment

// 1. Write a JavaScript function that reverse a number.
document.write("Question 1");
document.write("<br>");
var InputNum = 12345;
var reverse = 0;
while (InputNum != 0) {
    reverse = (reverse * 10) + (InputNum % 10);
    InputNum = parseInt(InputNum / 10);
}

document.write(reverse + "\n");
document.write("<br>");
document.write("<br>");

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not?
document.write("Question 2");
document.write("<br>");
var palindromeInputVal = "madam";
var sample = "";
function palindrome() {
    for (i = palindromeInputVal.length - 1; i >= 0; i--) {
        sample = sample + palindromeInputVal[i]
    }
    if (palindromeInputVal == sample) {
        document.write(sample + " is Palandrome ");
    }
    else {
        document.write(sample + " is not Palandrome ");
    }
}

palindrome();
document.write("<br>");
document.write("<br>");

// 3. Write a JavaScript function that generates all combinations of a string.
document.write("Question 3");
document.write("<br>");

function stringCominationgenerator(c) {
    inputValue = new Array();
    for (i = 0; i < c.length; i++) {
        for (j = i + 1; j < c.length + 1; j++) {
            inputValue.push(c.slice(i, j));
        }
    }
    return inputValue;
}
document.write(stringCominationgenerator("Human"));
document.write("<br>");
document.write("<br>");

//  4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
document.write("Question 4");
document.write("<br>");

var sortLetter = function (letter) {
    var sort = letter.split("").sort().join("");
    return sort;
}
document.write(sortLetter("human"));
document.write("<br>");
document.write("<br>");

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
document.write("Question 5");
document.write("<br>");
const capitalized = function (sentence) {
    let str = sentence.split(" ");
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substring(1);
    }
    return str.join(" ");
}
document.write(capitalized("my name is khan"));
document.write("<br>");
document.write("<br>");

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
document.write("Question 6");
document.write("<br>");


function LongeWord(inp) {
    let arra = inp.match(/\w+/g)
    let longest = 0
    let word = []

    for (let e of arra) longest = Math.max(longest, e.length)
    word = arra.filter(item => item.length === longest)

    return word.join(', ')
}

document.write(LongeWord("my name is khan"));
document.write("<br>");
document.write("<br>");



// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
document.write("Question 7");
document.write("<br>");

function Count(str) {
    var vowelsCount = 0;
    var string = str.toString();
    for (var i = 0; i <= string.length - 1; i++) {
        if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") {
            vowelsCount += 1;
        }
    }
    return vowelsCount;
}
document.write(Count("my name is khan"));
document.write("<br>");
document.write("<br>");

// Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
document.write("Question 8");
document.write("<br>");
function prnumber(n) {
    if (n === 1) {
        return "Is Not Prime";
    }
    else if (n === 2) {
        return true;
    } else {
        for (var x = 2; x < n; x++) {
            if (n % x === 0) {
                return "Is Not Prime";
            }
        }
        return "Is Prime";
    }
}
document.write(prnumber(4));
document.write("<br>");
document.write("<br>");

// 9. Write a JavaScript function which accepts an argument and returns the type.

document.write("Question 9");
document.write("<br>");

function prmiaryNmbr(nmbr) {
    var typfNmbr = typeof nmbr;
    console.log(typfNmbr);
    if (typfNmbr === "string") {
        document.write("It Is string");
    } else if (typfNmbr === "number") {
        document.write("It Is number");
    } else if (typfNmbr === "object") {
        document.write("It Is object");
    } else if (typfNmbr === "function") {
        document.write("It Is function");
    } else if (typfNmbr === "number") {
        document.write("It Is number");
    } else if (typfNmbr === "undefined") {
        document.write("It Is undefined");
    } else {
        document.write("It Is boolean");
    }
    return nmbr;
}
var rslt = prmiaryNmbr(42);
document.write("<br>");
document.write("<br>");


// 10. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
document.write("Question 10");
document.write("<br>");
function gretandlow(arr_num) {
    arr_num.sort(function (x, y) {
        return x - y;
    });
    var number = [arr_num[0]];
    var result = [];

    for (var j = 1; j < arr_num.length; j++) {
        if (arr_num[j - 1] !== arr_num[j]) {
            number.push(arr_num[j]);
        }
    }
    result.push(number[1], number[number.length - 2]);
    return result.join(',');
}

document.write(gretandlow([1, 2, 3, 4, 5]));