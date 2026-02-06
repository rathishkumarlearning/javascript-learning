export const courseData = {
  title: "JavaScript Mastery",
  subtitle: "From fundamentals to advanced patterns",
  chapters: [
    {
      id: 1,
      title: "JavaScript Foundations",
      description: "Variables, types, and the basics",
      lessons: [
        {
          id: "1-1",
          title: "What is JavaScript?",
          duration: "10 min",
          content: `
## Welcome to JavaScript! 🚀

JavaScript is the **programming language of the web**. Every website you visit uses JavaScript to create interactive experiences, from simple animations to complex web applications.

### Why Learn JavaScript?

JavaScript is everywhere:
- **Websites** — Every browser runs JavaScript
- **Mobile Apps** — React Native, Ionic
- **Desktop Apps** — Electron (VS Code, Discord, Slack)
- **Servers** — Node.js powers millions of APIs
- **Games** — Browser games, game engines
- **IoT** — Even robots and smart devices!

### A Brief History

| Year | Milestone |
|------|-----------|
| 1995 | Brendan Eich creates JavaScript in 10 days at Netscape |
| 1997 | ECMAScript 1 standardized |
| 2009 | Node.js brings JavaScript to servers |
| 2015 | ES6 (ECMAScript 2015) — massive modern update |
| Today | Most popular programming language on GitHub |

### Your First JavaScript Code

Let's write some code! Open your browser's console (press F12 or Cmd+Option+J):

\`\`\`javascript
// This is a comment - JavaScript ignores it
console.log("Hello, World!");

// You can do math
console.log(2 + 2);  // Output: 4

// Store values in variables
let name = "JavaScript Learner";
console.log("Welcome, " + name + "!");
\`\`\`

### How JavaScript Runs

\`\`\`
Your Code (.js file)
      ↓
JavaScript Engine (V8, SpiderMonkey)
      ↓
Machine Code
      ↓
Computer executes it!
\`\`\`

Every browser has a JavaScript engine:
- **Chrome** → V8 (also powers Node.js!)
- **Firefox** → SpiderMonkey
- **Safari** → JavaScriptCore
- **Edge** → V8 (Chromium-based now)

### JavaScript vs Java

Despite the similar names, they're completely different languages!

| JavaScript | Java |
|------------|------|
| Runs in browsers | Runs on JVM |
| Dynamically typed | Statically typed |
| Prototype-based | Class-based |
| Interpreted | Compiled |
| Created in 10 days | Years of development |

<tip>
💡 The name "JavaScript" was a marketing decision — Java was popular in 1995, so Netscape wanted to ride that wave!
</tip>

### Setting Up Your Development Environment

You have several options:

**Option 1: Browser Console (Quickest)**
- Press F12 in any browser
- Go to Console tab
- Start typing JavaScript!

**Option 2: VS Code (Recommended)**
\`\`\`bash
# Install VS Code from code.visualstudio.com
# Create a file: script.js
# Open with Live Server extension
\`\`\`

**Option 3: Node.js (For backend)**
\`\`\`bash
# Install from nodejs.org
node script.js
\`\`\`

### HTML + JavaScript

JavaScript runs inside HTML pages:

\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <title>My First JS</title>
</head>
<body>
    <h1 id="heading">Hello!</h1>
    
    <script>
        // JavaScript goes here
        document.getElementById("heading").textContent = "Hello, JavaScript!";
    </script>
</body>
</html>
\`\`\`

Or link an external file:

\`\`\`html
<script src="script.js"></script>
\`\`\`

<warning>
⚠️ Place your \`<script>\` tag at the end of \`<body>\` or use \`defer\` attribute — this ensures HTML loads before JavaScript runs!
</warning>

### What You'll Build in This Course

By the end, you'll be able to create:
- Interactive web pages
- Form validation
- API integrations
- Single-page applications
- Node.js servers
- And much more!

Let's start coding! 💪
          `
        },
        {
          id: "1-2",
          title: "Variables and Data Types",
          duration: "15 min",
          content: `
## Storing and Using Data 📦

Variables are containers that hold data. Let's learn how to create and use them!

### Declaring Variables

JavaScript has three ways to declare variables:

\`\`\`javascript
// var - the old way (avoid in modern code)
var oldWay = "I'm old school";

// let - for values that change
let score = 0;
score = 100;  // Can be reassigned

// const - for values that don't change
const PI = 3.14159;
// PI = 3;  // Error! Cannot reassign const
\`\`\`

### var vs let vs const

| Keyword | Reassignable | Block Scoped | Hoisted |
|---------|-------------|--------------|---------|
| var | ✅ Yes | ❌ No (function) | ✅ Yes |
| let | ✅ Yes | ✅ Yes | ❌ No |
| const | ❌ No | ✅ Yes | ❌ No |

<tip>
💡 Rule of thumb: Use \`const\` by default. Use \`let\` when you need to reassign. Avoid \`var\` entirely!
</tip>

### Data Types

JavaScript has **8 data types**:

**Primitive Types (7):**
\`\`\`javascript
// String - text
let name = "JavaScript";
let greeting = 'Hello!';
let template = \`Hello, \${name}!\`;  // Template literal

// Number - integers and decimals
let age = 25;
let price = 19.99;
let billion = 1e9;  // 1,000,000,000

// BigInt - very large numbers
let huge = 9007199254740991n;

// Boolean - true or false
let isAwesome = true;
let isBoring = false;

// Undefined - declared but not assigned
let mystery;
console.log(mystery);  // undefined

// Null - intentionally empty
let empty = null;

// Symbol - unique identifier
let id = Symbol("id");
\`\`\`

**Reference Type (1):**
\`\`\`javascript
// Object - collections of data
let person = {
    name: "Alex",
    age: 30,
    isStudent: true
};

// Arrays are also objects!
let colors = ["red", "green", "blue"];
\`\`\`

### Type Checking

Use \`typeof\` to check types:

\`\`\`javascript
console.log(typeof "hello");     // "string"
console.log(typeof 42);          // "number"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"
console.log(typeof null);        // "object" (famous bug!)
console.log(typeof {});          // "object"
console.log(typeof []);          // "object"
console.log(typeof function(){}); // "function"
\`\`\`

<warning>
⚠️ \`typeof null\` returns "object" — this is a historical bug in JavaScript that can never be fixed for backward compatibility!
</warning>

### Type Coercion

JavaScript automatically converts types (sometimes unexpectedly):

\`\`\`javascript
// String concatenation wins
console.log("5" + 3);      // "53" (string)
console.log("5" + "3");    // "53" (string)

// Math operators convert to numbers
console.log("5" - 3);      // 2 (number)
console.log("5" * "3");    // 15 (number)
console.log("10" / 2);     // 5 (number)

// Boolean conversions
console.log(Boolean(0));        // false
console.log(Boolean(""));       // false
console.log(Boolean("hello"));  // true
console.log(Boolean([]));       // true (arrays are truthy!)
\`\`\`

### Truthy and Falsy Values

**Falsy values** (evaluate to false):
\`\`\`javascript
false
0
-0
0n (BigInt zero)
"" (empty string)
null
undefined
NaN
\`\`\`

**Everything else is truthy!**

\`\`\`javascript
// Common gotcha
if ([]) {
    console.log("Empty array is truthy!");  // This runs!
}

if ({}) {
    console.log("Empty object is truthy!");  // This runs!
}
\`\`\`

### String Methods

\`\`\`javascript
let str = "JavaScript is awesome";

str.length;              // 21
str.toUpperCase();       // "JAVASCRIPT IS AWESOME"
str.toLowerCase();       // "javascript is awesome"
str.includes("Script");  // true
str.startsWith("Java");  // true
str.endsWith("some");    // true
str.slice(0, 4);         // "Java"
str.split(" ");          // ["JavaScript", "is", "awesome"]
str.replace("awesome", "cool"); // "JavaScript is cool"
str.trim();              // Remove whitespace
\`\`\`

### Template Literals (ES6)

The modern way to work with strings:

\`\`\`javascript
let name = "World";
let age = 25;

// Old way (concatenation)
let oldGreeting = "Hello, " + name + "! You are " + age + " years old.";

// New way (template literals)
let newGreeting = \`Hello, \${name}! You are \${age} years old.\`;

// Multi-line strings
let multiLine = \`
    This is line 1
    This is line 2
    This is line 3
\`;

// Expressions inside
let result = \`2 + 2 = \${2 + 2}\`;  // "2 + 2 = 4"
\`\`\`

### Number Methods

\`\`\`javascript
let num = 3.14159;

num.toFixed(2);          // "3.14" (string!)
num.toString();          // "3.14159"
parseInt("42px");        // 42
parseFloat("3.14");      // 3.14
Number("42");            // 42
Number.isInteger(42);    // true
Number.isNaN(NaN);       // true
Math.round(3.7);         // 4
Math.floor(3.7);         // 3
Math.ceil(3.2);          // 4
Math.random();           // 0.0 to 0.999...
Math.max(1, 5, 3);       // 5
Math.min(1, 5, 3);       // 1
\`\`\`

Now you understand how JavaScript stores and manipulates data! 🎯
          `
        }
      ]
    },
    {
      id: 2,
      title: "Operators and Control Flow",
      description: "Making decisions in code",
      lessons: [
        {
          id: "2-1",
          title: "Operators",
          duration: "12 min",
          content: `
## Operators — Doing Things with Data 🔧

Operators let you perform actions on values — math, comparisons, logic, and more!

### Arithmetic Operators

\`\`\`javascript
let a = 10;
let b = 3;

console.log(a + b);   // 13 (addition)
console.log(a - b);   // 7 (subtraction)
console.log(a * b);   // 30 (multiplication)
console.log(a / b);   // 3.333... (division)
console.log(a % b);   // 1 (modulo - remainder)
console.log(a ** b);  // 1000 (exponentiation - 10³)

// Increment and Decrement
let count = 5;
count++;  // 6 (same as count = count + 1)
count--;  // 5 (same as count = count - 1)

// Pre vs Post increment
let x = 5;
console.log(x++);  // 5 (returns, THEN increments)
console.log(x);    // 6

let y = 5;
console.log(++y);  // 6 (increments, THEN returns)
\`\`\`

### Assignment Operators

\`\`\`javascript
let x = 10;

x += 5;   // x = x + 5  → 15
x -= 3;   // x = x - 3  → 12
x *= 2;   // x = x * 2  → 24
x /= 4;   // x = x / 4  → 6
x %= 4;   // x = x % 4  → 2
x **= 3;  // x = x ** 3 → 8
\`\`\`

### Comparison Operators

\`\`\`javascript
// Equality
console.log(5 == "5");   // true (loose equality - type coercion!)
console.log(5 === "5");  // false (strict equality - no coercion)

// Inequality
console.log(5 != "5");   // false (loose)
console.log(5 !== "5");  // true (strict)

// Relational
console.log(5 > 3);    // true
console.log(5 < 3);    // false
console.log(5 >= 5);   // true
console.log(5 <= 4);   // false
\`\`\`

<warning>
⚠️ ALWAYS use \`===\` (strict equality) and \`!==\` (strict inequality)! Loose equality causes subtle bugs.
</warning>

### Loose vs Strict Equality Gotchas

\`\`\`javascript
// These are all true with == (loose)
console.log(0 == "");        // true
console.log(0 == false);     // true
console.log("" == false);    // true
console.log(null == undefined); // true
console.log("1" == 1);       // true

// With === (strict) - all false
console.log(0 === "");       // false
console.log(0 === false);    // false
console.log("" === false);   // false
\`\`\`

### Logical Operators

\`\`\`javascript
// AND (&&) - both must be true
console.log(true && true);    // true
console.log(true && false);   // false
console.log(false && true);   // false

// OR (||) - at least one must be true
console.log(true || false);   // true
console.log(false || false);  // false

// NOT (!) - inverts the value
console.log(!true);           // false
console.log(!false);          // true
console.log(!0);              // true (0 is falsy)
console.log(!"");             // true (empty string is falsy)

// Double NOT (!!) converts to boolean
console.log(!!"hello");       // true
console.log(!!0);             // false
\`\`\`

### Short-Circuit Evaluation

\`\`\`javascript
// AND returns first falsy value, or last value
console.log("hello" && "world");  // "world"
console.log(0 && "world");        // 0
console.log("" && "world");       // ""

// OR returns first truthy value, or last value
console.log("hello" || "world");  // "hello"
console.log(0 || "default");      // "default"
console.log("" || "fallback");    // "fallback"

// Practical use: default values
let username = userInput || "Guest";

// Nullish coalescing (??) - only null/undefined
let value = null ?? "default";     // "default"
let value2 = 0 ?? "default";       // 0 (0 is not null/undefined)
let value3 = "" ?? "default";      // "" (empty string is not null/undefined)
\`\`\`

<tip>
💡 Use \`||\` for default values when falsy values should trigger the default. Use \`??\` when ONLY null/undefined should trigger the default.
</tip>

### Ternary Operator

A shorthand for if-else:

\`\`\`javascript
// condition ? valueIfTrue : valueIfFalse

let age = 20;
let status = age >= 18 ? "adult" : "minor";
console.log(status);  // "adult"

// Nested ternary (use sparingly!)
let score = 85;
let grade = score >= 90 ? "A" 
          : score >= 80 ? "B"
          : score >= 70 ? "C"
          : score >= 60 ? "D"
          : "F";
console.log(grade);  // "B"
\`\`\`

### Optional Chaining (?.)

Safely access nested properties:

\`\`\`javascript
let user = {
    name: "Alex",
    address: {
        city: "New York"
    }
};

// Old way (verbose)
let city = user && user.address && user.address.city;

// New way (optional chaining)
let city2 = user?.address?.city;  // "New York"

// If property doesn't exist
let country = user?.address?.country;  // undefined (no error!)

// With arrays
let firstItem = arr?.[0];

// With methods
let result = obj?.method?.();
\`\`\`

### typeof and instanceof

\`\`\`javascript
// typeof for primitives
console.log(typeof 42);        // "number"
console.log(typeof "hello");   // "string"
console.log(typeof true);      // "boolean"

// instanceof for objects
console.log([] instanceof Array);   // true
console.log({} instanceof Object);  // true
console.log(new Date() instanceof Date);  // true

// Array.isArray() is more reliable
console.log(Array.isArray([]));     // true
console.log(Array.isArray({}));     // false
\`\`\`

Operators are the building blocks of logic in your code! 🧱
          `
        },
        {
          id: "2-2",
          title: "Conditionals and Loops",
          duration: "15 min",
          content: `
## Control Flow — Making Decisions 🔀

Programs need to make decisions and repeat actions. Let's learn how!

### If Statements

\`\`\`javascript
let temperature = 75;

if (temperature > 90) {
    console.log("It's hot! 🥵");
} else if (temperature > 70) {
    console.log("It's nice! 😊");
} else if (temperature > 50) {
    console.log("It's cool 🧥");
} else {
    console.log("It's cold! 🥶");
}
// Output: "It's nice! 😊"
\`\`\`

### Switch Statements

Better than multiple if-else for checking specific values:

\`\`\`javascript
let day = "Monday";

switch (day) {
    case "Monday":
        console.log("Start of the week");
        break;
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
        console.log("Midweek");
        break;
    case "Friday":
        console.log("TGIF! 🎉");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Weekend! 🎊");
        break;
    default:
        console.log("Invalid day");
}
\`\`\`

<warning>
⚠️ Don't forget the \`break\` statement! Without it, execution "falls through" to the next case.
</warning>

### For Loops

\`\`\`javascript
// Classic for loop
for (let i = 0; i < 5; i++) {
    console.log(i);  // 0, 1, 2, 3, 4
}

// Loop through array
const fruits = ["apple", "banana", "cherry"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// For...of (values) - ES6
for (const fruit of fruits) {
    console.log(fruit);  // "apple", "banana", "cherry"
}

// For...in (keys/indices) - use for objects!
const person = { name: "Alex", age: 30 };
for (const key in person) {
    console.log(\`\${key}: \${person[key]}\`);
}
// "name: Alex"
// "age: 30"
\`\`\`

<tip>
💡 Use \`for...of\` for arrays (iterates values). Use \`for...in\` for objects (iterates keys).
</tip>

### While Loops

\`\`\`javascript
// While - check condition first
let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}
// 0, 1, 2, 3, 4

// Do...while - always runs at least once
let num = 10;
do {
    console.log(num);
    num++;
} while (num < 5);
// 10 (runs once even though condition is false!)
\`\`\`

### Break and Continue

\`\`\`javascript
// break - exit the loop entirely
for (let i = 0; i < 10; i++) {
    if (i === 5) break;
    console.log(i);  // 0, 1, 2, 3, 4
}

// continue - skip to next iteration
for (let i = 0; i < 5; i++) {
    if (i === 2) continue;
    console.log(i);  // 0, 1, 3, 4 (skips 2)
}
\`\`\`

### Nested Loops

\`\`\`javascript
// Multiplication table
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(\`\${i} x \${j} = \${i * j}\`);
    }
}
// 1 x 1 = 1
// 1 x 2 = 2
// 1 x 3 = 3
// 2 x 1 = 2
// ... etc
\`\`\`

### Labeled Statements

Break out of nested loops:

\`\`\`javascript
outerLoop: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) {
            break outerLoop;  // Exits BOTH loops!
        }
        console.log(i, j);
    }
}
// 0 0
// 0 1
// 0 2
// 1 0
// (stops here)
\`\`\`

### Loop Performance Tips

\`\`\`javascript
const arr = [1, 2, 3, 4, 5];

// ❌ Slower - length recalculated each iteration
for (let i = 0; i < arr.length; i++) { }

// ✅ Faster - cache the length
for (let i = 0, len = arr.length; i < len; i++) { }

// ✅ Even simpler - use for...of
for (const item of arr) { }

// ✅ Or array methods (most readable)
arr.forEach(item => console.log(item));
\`\`\`

### Practical Examples

\`\`\`javascript
// FizzBuzz - classic interview question!
for (let i = 1; i <= 15; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// Find first even number
const numbers = [1, 3, 5, 8, 9, 10];
let firstEven;
for (const num of numbers) {
    if (num % 2 === 0) {
        firstEven = num;
        break;
    }
}
console.log(firstEven);  // 8

// Sum all numbers
let sum = 0;
for (const num of numbers) {
    sum += num;
}
console.log(sum);  // 36
\`\`\`

Control flow is the foundation of programming logic! 🧠
          `
        }
      ]
    },
    {
      id: 3,
      title: "Functions",
      description: "Reusable blocks of code",
      lessons: [
        {
          id: "3-1",
          title: "Function Basics",
          duration: "14 min",
          content: `
## Functions — Reusable Code Blocks 📦

Functions let you write code once and use it many times!

### Declaring Functions

\`\`\`javascript
// Function Declaration
function greet(name) {
    return "Hello, " + name + "!";
}

// Call the function
console.log(greet("World"));  // "Hello, World!"

// Function Expression
const greet2 = function(name) {
    return "Hi, " + name + "!";
};

// Arrow Function (ES6)
const greet3 = (name) => {
    return "Hey, " + name + "!";
};

// Arrow Function - short form (implicit return)
const greet4 = name => "Yo, " + name + "!";
\`\`\`

### Parameters and Arguments

\`\`\`javascript
// Parameters with default values
function createUser(name, age = 18, country = "USA") {
    return { name, age, country };
}

console.log(createUser("Alex"));
// { name: "Alex", age: 18, country: "USA" }

console.log(createUser("Maria", 25, "Spain"));
// { name: "Maria", age: 25, country: "Spain" }

// Rest parameters (collect remaining args)
function sum(...numbers) {
    let total = 0;
    for (const num of numbers) {
        total += num;
    }
    return total;
}

console.log(sum(1, 2, 3, 4, 5));  // 15

// Spread operator (opposite of rest)
const nums = [1, 2, 3];
console.log(sum(...nums));  // 6
\`\`\`

### Return Values

\`\`\`javascript
// Single return value
function square(x) {
    return x * x;
}

// Multiple values (return an object or array)
function getMinMax(numbers) {
    return {
        min: Math.min(...numbers),
        max: Math.max(...numbers)
    };
}

const result = getMinMax([5, 2, 9, 1, 7]);
console.log(result.min);  // 1
console.log(result.max);  // 9

// Destructuring the return
const { min, max } = getMinMax([5, 2, 9, 1, 7]);

// No return = returns undefined
function noReturn() {
    console.log("I don't return anything");
}
console.log(noReturn());  // undefined
\`\`\`

### Arrow Functions

\`\`\`javascript
// Regular function
function add(a, b) {
    return a + b;
}

// Arrow function - full form
const add2 = (a, b) => {
    return a + b;
};

// Arrow function - concise (implicit return)
const add3 = (a, b) => a + b;

// Single parameter - no parentheses needed
const double = x => x * 2;

// No parameters - empty parentheses required
const sayHello = () => "Hello!";

// Returning an object - wrap in parentheses
const createPerson = (name, age) => ({ name, age });
\`\`\`

<tip>
💡 Arrow functions don't have their own \`this\` binding — they inherit it from the surrounding scope. This is important for callbacks!
</tip>

### Function Scope

\`\`\`javascript
let globalVar = "I'm global";

function outer() {
    let outerVar = "I'm in outer";
    
    function inner() {
        let innerVar = "I'm in inner";
        
        console.log(globalVar);  // ✅ Accessible
        console.log(outerVar);   // ✅ Accessible
        console.log(innerVar);   // ✅ Accessible
    }
    
    inner();
    // console.log(innerVar);  // ❌ Error! Not accessible
}

outer();
// console.log(outerVar);  // ❌ Error! Not accessible
\`\`\`

### Hoisting

\`\`\`javascript
// Function declarations are hoisted
sayHi();  // Works! "Hi!"

function sayHi() {
    console.log("Hi!");
}

// Function expressions are NOT hoisted
// sayBye();  // ❌ Error! sayBye is not defined

const sayBye = function() {
    console.log("Bye!");
};

// Variables declared with var are hoisted (but not initialized)
console.log(x);  // undefined (not an error, but dangerous!)
var x = 5;

// let and const are NOT hoisted
// console.log(y);  // ❌ Error!
let y = 5;
\`\`\`

<warning>
⚠️ Hoisting can cause confusing bugs. Declare all functions and variables at the top of their scope!
</warning>

### IIFE (Immediately Invoked Function Expression)

\`\`\`javascript
// Execute a function immediately
(function() {
    console.log("I run immediately!");
})();

// With arrow function
(() => {
    console.log("Arrow IIFE!");
})();

// Useful for creating private scope
const counter = (function() {
    let count = 0;  // Private variable
    
    return {
        increment: () => ++count,
        decrement: () => --count,
        getCount: () => count
    };
})();

console.log(counter.increment());  // 1
console.log(counter.increment());  // 2
console.log(counter.getCount());   // 2
// console.log(count);  // ❌ Error! count is private
\`\`\`

Functions are the heart of JavaScript programming! ❤️
          `
        },
        {
          id: "3-2",
          title: "Advanced Function Concepts",
          duration: "15 min",
          content: `
## Higher-Order Functions & Closures 🔮

Let's explore the powerful patterns that make JavaScript unique!

### Higher-Order Functions

Functions that take functions as arguments or return functions:

\`\`\`javascript
// Passing a function as an argument
function operate(a, b, operation) {
    return operation(a, b);
}

const add = (x, y) => x + y;
const multiply = (x, y) => x * y;

console.log(operate(5, 3, add));       // 8
console.log(operate(5, 3, multiply));  // 15

// Returning a function
function createMultiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5));  // 10
console.log(triple(5));  // 15
\`\`\`

### Closures

A closure is when a function "remembers" variables from its outer scope:

\`\`\`javascript
function createCounter() {
    let count = 0;  // This variable is "enclosed"
    
    return {
        increment() {
            count++;
            return count;
        },
        decrement() {
            count--;
            return count;
        },
        getCount() {
            return count;
        }
    };
}

const counter = createCounter();
console.log(counter.increment());  // 1
console.log(counter.increment());  // 2
console.log(counter.decrement());  // 1
console.log(counter.getCount());   // 1

// Each call creates a NEW closure with its own count
const counter2 = createCounter();
console.log(counter2.getCount());  // 0 (separate count!)
\`\`\`

<tip>
💡 Closures are powerful for data privacy — the \`count\` variable can't be accessed directly from outside!
</tip>

### Callback Functions

Functions passed to other functions to be called later:

\`\`\`javascript
// Synchronous callback
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(num) {
    console.log(num * 2);
});
// 2, 4, 6, 8, 10

// Arrow function callback
numbers.forEach(num => console.log(num * 2));

// Asynchronous callback
setTimeout(() => {
    console.log("This runs after 2 seconds");
}, 2000);

console.log("This runs immediately");
// Output:
// "This runs immediately"
// (2 seconds later) "This runs after 2 seconds"
\`\`\`

### Array Methods with Callbacks

\`\`\`javascript
const numbers = [1, 2, 3, 4, 5];

// map - transform each element
const doubled = numbers.map(n => n * 2);
console.log(doubled);  // [2, 4, 6, 8, 10]

// filter - keep elements that pass a test
const evens = numbers.filter(n => n % 2 === 0);
console.log(evens);  // [2, 4]

// find - get first element that passes
const firstBig = numbers.find(n => n > 3);
console.log(firstBig);  // 4

// findIndex - get index of first match
const index = numbers.findIndex(n => n > 3);
console.log(index);  // 3

// some - check if ANY element passes
const hasEven = numbers.some(n => n % 2 === 0);
console.log(hasEven);  // true

// every - check if ALL elements pass
const allPositive = numbers.every(n => n > 0);
console.log(allPositive);  // true

// reduce - accumulate to a single value
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log(sum);  // 15

const product = numbers.reduce((acc, n) => acc * n, 1);
console.log(product);  // 120
\`\`\`

### Reduce Deep Dive

\`\`\`javascript
// Count occurrences
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const counts = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {});

console.log(counts);
// { apple: 3, banana: 2, orange: 1 }

// Group by property
const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 25 }
];

const byAge = people.reduce((acc, person) => {
    const age = person.age;
    if (!acc[age]) acc[age] = [];
    acc[age].push(person);
    return acc;
}, {});

console.log(byAge);
// { 25: [{Alice}, {Charlie}], 30: [{Bob}] }

// Flatten array
const nested = [[1, 2], [3, 4], [5, 6]];
const flat = nested.reduce((acc, arr) => acc.concat(arr), []);
console.log(flat);  // [1, 2, 3, 4, 5, 6]

// Or use flat() method
console.log(nested.flat());  // [1, 2, 3, 4, 5, 6]
\`\`\`

### Method Chaining

\`\`\`javascript
const products = [
    { name: "Laptop", price: 1200, category: "Electronics" },
    { name: "Shirt", price: 50, category: "Clothing" },
    { name: "Phone", price: 800, category: "Electronics" },
    { name: "Pants", price: 80, category: "Clothing" },
    { name: "Tablet", price: 500, category: "Electronics" }
];

// Chain: filter → map → reduce
const totalElectronics = products
    .filter(p => p.category === "Electronics")
    .map(p => p.price)
    .reduce((sum, price) => sum + price, 0);

console.log(totalElectronics);  // 2500

// Get names of expensive products, sorted
const expensiveNames = products
    .filter(p => p.price > 100)
    .sort((a, b) => b.price - a.price)
    .map(p => p.name);

console.log(expensiveNames);  // ["Laptop", "Phone", "Tablet"]
\`\`\`

<warning>
⚠️ Long chains can be hard to debug. Break them up with intermediate variables if they get complex!
</warning>

Higher-order functions make your code declarative and elegant! ✨
          `
        }
      ]
    },
    {
      id: 4,
      title: "Objects and Arrays",
      description: "Working with complex data",
      lessons: [
        {
          id: "4-1",
          title: "Objects Deep Dive",
          duration: "14 min",
          content: `
## Objects — Collections of Properties 🗂️

Objects are the foundation of JavaScript. Let's master them!

### Creating Objects

\`\`\`javascript
// Object literal (most common)
const person = {
    name: "Alice",
    age: 30,
    city: "New York"
};

// Constructor
const person2 = new Object();
person2.name = "Bob";

// Object.create()
const person3 = Object.create(null);  // No prototype

// ES6 shorthand properties
const name = "Charlie";
const age = 25;
const person4 = { name, age };  // Same as { name: name, age: age }
\`\`\`

### Accessing Properties

\`\`\`javascript
const user = {
    name: "Alice",
    "full name": "Alice Smith",
    123: "numeric key"
};

// Dot notation
console.log(user.name);  // "Alice"

// Bracket notation (required for special keys)
console.log(user["full name"]);  // "Alice Smith"
console.log(user[123]);          // "numeric key"

// Dynamic property access
const key = "name";
console.log(user[key]);  // "Alice"

// Optional chaining
console.log(user?.address?.city);  // undefined (no error)
\`\`\`

### Modifying Objects

\`\`\`javascript
const car = {
    brand: "Toyota",
    model: "Camry"
};

// Add property
car.year = 2024;

// Modify property
car.model = "Corolla";

// Delete property
delete car.brand;

console.log(car);  // { model: "Corolla", year: 2024 }
\`\`\`

### Object Methods

\`\`\`javascript
const calculator = {
    value: 0,
    
    // Method shorthand (ES6)
    add(n) {
        this.value += n;
        return this;  // Enable chaining
    },
    
    subtract(n) {
        this.value -= n;
        return this;
    },
    
    multiply(n) {
        this.value *= n;
        return this;
    },
    
    getResult() {
        return this.value;
    }
};

// Method chaining
const result = calculator
    .add(10)
    .multiply(2)
    .subtract(5)
    .getResult();

console.log(result);  // 15
\`\`\`

### this Keyword

\`\`\`javascript
const person = {
    name: "Alice",
    
    // Regular function - this refers to the object
    greet() {
        console.log(\`Hi, I'm \${this.name}\`);
    },
    
    // Arrow function - this refers to outer scope!
    greetArrow: () => {
        console.log(\`Hi, I'm \${this.name}\`);  // undefined!
    }
};

person.greet();       // "Hi, I'm Alice"
person.greetArrow();  // "Hi, I'm undefined"
\`\`\`

<warning>
⚠️ Don't use arrow functions for object methods if you need \`this\` to refer to the object!
</warning>

### Object Destructuring

\`\`\`javascript
const person = {
    name: "Alice",
    age: 30,
    city: "New York",
    country: "USA"
};

// Basic destructuring
const { name, age } = person;
console.log(name, age);  // "Alice" 30

// Rename variables
const { name: personName, age: personAge } = person;
console.log(personName);  // "Alice"

// Default values
const { phone = "N/A" } = person;
console.log(phone);  // "N/A"

// Nested destructuring
const user = {
    id: 1,
    profile: {
        name: "Bob",
        email: "bob@email.com"
    }
};

const { profile: { name: userName, email } } = user;
console.log(userName, email);  // "Bob" "bob@email.com"

// Rest pattern
const { name: n, ...rest } = person;
console.log(rest);  // { age: 30, city: "New York", country: "USA" }
\`\`\`

### Object Static Methods

\`\`\`javascript
const obj = { a: 1, b: 2, c: 3 };

// Get keys
console.log(Object.keys(obj));    // ["a", "b", "c"]

// Get values
console.log(Object.values(obj));  // [1, 2, 3]

// Get key-value pairs
console.log(Object.entries(obj)); // [["a", 1], ["b", 2], ["c", 3]]

// Create from entries
const entries = [["x", 10], ["y", 20]];
console.log(Object.fromEntries(entries));  // { x: 10, y: 20 }

// Merge objects
const defaults = { theme: "dark", lang: "en" };
const userPrefs = { lang: "es" };
const settings = Object.assign({}, defaults, userPrefs);
console.log(settings);  // { theme: "dark", lang: "es" }

// Spread operator (preferred)
const settings2 = { ...defaults, ...userPrefs };
console.log(settings2);  // { theme: "dark", lang: "es" }

// Freeze object (prevent changes)
const frozen = Object.freeze({ x: 1 });
frozen.x = 2;  // Silently fails (error in strict mode)
console.log(frozen.x);  // 1
\`\`\`

<tip>
💡 Use spread \`{...obj}\` for shallow copies. For deep copies, use \`structuredClone(obj)\` or \`JSON.parse(JSON.stringify(obj))\`.
</tip>

Objects are everywhere in JavaScript — master them! 🎯
          `
        },
        {
          id: "4-2",
          title: "Arrays Deep Dive",
          duration: "15 min",
          content: `
## Arrays — Ordered Collections 📚

Arrays store lists of items. Let's explore all their features!

### Creating Arrays

\`\`\`javascript
// Array literal
const fruits = ["apple", "banana", "cherry"];

// Array constructor
const numbers = new Array(1, 2, 3);

// Array.from() - convert iterable to array
const chars = Array.from("hello");  // ["h", "e", "l", "l", "o"]

// Array.of() - create array from arguments
const arr = Array.of(7);  // [7] (not empty array of length 7!)

// Fill with values
const zeros = new Array(5).fill(0);  // [0, 0, 0, 0, 0]

// Generate sequence
const sequence = Array.from({ length: 5 }, (_, i) => i + 1);
// [1, 2, 3, 4, 5]
\`\`\`

### Accessing Elements

\`\`\`javascript
const arr = ["a", "b", "c", "d", "e"];

// By index
console.log(arr[0]);   // "a"
console.log(arr[4]);   // "e"
console.log(arr[-1]);  // undefined (no negative indexing!)

// at() method - supports negative indices (ES2022)
console.log(arr.at(0));   // "a"
console.log(arr.at(-1));  // "e" (last element!)
console.log(arr.at(-2));  // "d" (second to last!)

// Length
console.log(arr.length);  // 5

// First and last
const first = arr[0];
const last = arr[arr.length - 1];  // or arr.at(-1)
\`\`\`

### Modifying Arrays

\`\`\`javascript
const arr = ["a", "b", "c"];

// Add to end
arr.push("d");         // ["a", "b", "c", "d"]
arr.push("e", "f");    // ["a", "b", "c", "d", "e", "f"]

// Remove from end
const last = arr.pop();  // "f", arr = ["a", "b", "c", "d", "e"]

// Add to beginning
arr.unshift("z");      // ["z", "a", "b", "c", "d", "e"]

// Remove from beginning
const first = arr.shift();  // "z", arr = ["a", "b", "c", "d", "e"]

// Splice - remove/insert at any position
// splice(startIndex, deleteCount, ...itemsToAdd)
const nums = [1, 2, 3, 4, 5];
nums.splice(2, 1);        // Remove 1 element at index 2: [1, 2, 4, 5]
nums.splice(2, 0, 3);     // Insert 3 at index 2: [1, 2, 3, 4, 5]
nums.splice(1, 2, 'a', 'b'); // Replace 2 elements: [1, 'a', 'b', 4, 5]
\`\`\`

### Non-Mutating Methods

\`\`\`javascript
const original = [1, 2, 3, 4, 5];

// slice - copy portion of array
const slice1 = original.slice(1, 4);   // [2, 3, 4]
const slice2 = original.slice(-2);     // [4, 5]
const copy = original.slice();         // Full copy

// concat - merge arrays
const merged = original.concat([6, 7], [8, 9]);
// [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Spread operator (preferred)
const merged2 = [...original, 6, 7, ...[8, 9]];

// original is unchanged!
console.log(original);  // [1, 2, 3, 4, 5]
\`\`\`

<tip>
💡 Methods like \`push\`, \`pop\`, \`splice\` MUTATE the original array. Methods like \`slice\`, \`concat\`, \`map\`, \`filter\` return NEW arrays.
</tip>

### Array Destructuring

\`\`\`javascript
const colors = ["red", "green", "blue", "yellow"];

// Basic destructuring
const [first, second] = colors;
console.log(first, second);  // "red" "green"

// Skip elements
const [, , third] = colors;
console.log(third);  // "blue"

// Rest pattern
const [head, ...tail] = colors;
console.log(head);  // "red"
console.log(tail);  // ["green", "blue", "yellow"]

// Default values
const [a, b, c, d, e = "purple"] = colors;
console.log(e);  // "purple"

// Swap variables
let x = 1, y = 2;
[x, y] = [y, x];
console.log(x, y);  // 2 1
\`\`\`

### Searching Arrays

\`\`\`javascript
const fruits = ["apple", "banana", "cherry", "banana"];

// indexOf / lastIndexOf
console.log(fruits.indexOf("banana"));      // 1
console.log(fruits.lastIndexOf("banana"));  // 3
console.log(fruits.indexOf("grape"));       // -1 (not found)

// includes
console.log(fruits.includes("cherry"));  // true
console.log(fruits.includes("grape"));   // false

// find - first element matching condition
const numbers = [1, 5, 10, 15, 20];
const found = numbers.find(n => n > 8);
console.log(found);  // 10

// findIndex
const foundIndex = numbers.findIndex(n => n > 8);
console.log(foundIndex);  // 2

// findLast / findLastIndex (ES2023)
const foundLast = numbers.findLast(n => n > 8);
console.log(foundLast);  // 20
\`\`\`

### Sorting Arrays

\`\`\`javascript
const fruits = ["cherry", "apple", "banana"];
fruits.sort();  // Alphabetical: ["apple", "banana", "cherry"]

// Numbers need a compare function!
const nums = [10, 2, 30, 4];
nums.sort();  // ❌ Wrong! ["10", "2", "30", "4"] (string sort)

nums.sort((a, b) => a - b);  // ✅ Ascending: [2, 4, 10, 30]
nums.sort((a, b) => b - a);  // ✅ Descending: [30, 10, 4, 2]

// Sort objects
const people = [
    { name: "Bob", age: 30 },
    { name: "Alice", age: 25 },
    { name: "Charlie", age: 35 }
];

people.sort((a, b) => a.age - b.age);
// Sorted by age ascending

// Reverse
const arr = [1, 2, 3];
arr.reverse();  // [3, 2, 1]

// toSorted() / toReversed() - non-mutating (ES2023)
const original = [3, 1, 2];
const sorted = original.toSorted((a, b) => a - b);
console.log(original);  // [3, 1, 2] (unchanged!)
console.log(sorted);    // [1, 2, 3]
\`\`\`

<warning>
⚠️ \`sort()\` mutates the original array and sorts as strings by default. Always provide a compare function for numbers!
</warning>

Arrays are essential for working with collections of data! 📊
          `
        }
      ]
    },
    {
      id: 5,
      title: "DOM Manipulation",
      description: "Making web pages interactive",
      lessons: [
        {
          id: "5-1",
          title: "Selecting and Modifying Elements",
          duration: "15 min",
          content: `
## The DOM — Your Page as Objects 🌳

The DOM (Document Object Model) represents your HTML as a tree of objects that JavaScript can manipulate!

### What is the DOM?

\`\`\`
HTML Document:
<html>
  <head><title>Page</title></head>
  <body>
    <h1>Hello</h1>
    <p>World</p>
  </body>
</html>

DOM Tree:
document
  └── html
        ├── head
        │     └── title
        │           └── "Page"
        └── body
              ├── h1
              │     └── "Hello"
              └── p
                    └── "World"
\`\`\`

### Selecting Elements

\`\`\`javascript
// By ID (returns single element)
const header = document.getElementById("header");

// By class (returns HTMLCollection)
const items = document.getElementsByClassName("item");

// By tag name (returns HTMLCollection)
const paragraphs = document.getElementsByTagName("p");

// Query selector (returns first match)
const first = document.querySelector(".item");
const button = document.querySelector("#submit-btn");
const link = document.querySelector("a[href='#']");

// Query selector all (returns NodeList)
const allItems = document.querySelectorAll(".item");
const allLinks = document.querySelectorAll("nav a");

// Modern best practice: use querySelector/querySelectorAll
\`\`\`

<tip>
💡 \`querySelector\` uses CSS selector syntax — anything you can select in CSS, you can select in JavaScript!
</tip>

### HTMLCollection vs NodeList

\`\`\`javascript
// HTMLCollection (live - updates automatically)
const divs = document.getElementsByTagName("div");

// NodeList from querySelectorAll (static snapshot)
const items = document.querySelectorAll(".item");

// Convert to array for array methods
const divsArray = Array.from(divs);
const itemsArray = [...items];

// NodeList has forEach built-in
items.forEach(item => console.log(item));

// HTMLCollection doesn't!
// divs.forEach(...)  // Error!
Array.from(divs).forEach(div => console.log(div));
\`\`\`

### Modifying Content

\`\`\`javascript
const element = document.querySelector("#myDiv");

// Text content (plain text, safer)
element.textContent = "Hello, World!";
console.log(element.textContent);

// innerHTML (can include HTML, be careful!)
element.innerHTML = "<strong>Bold</strong> and <em>italic</em>";

// innerText (respects CSS visibility)
element.innerText = "Visible text only";

// Value (for form inputs)
const input = document.querySelector("input");
input.value = "Default text";
console.log(input.value);
\`\`\`

<warning>
⚠️ Never use \`innerHTML\` with user input! It can lead to XSS (cross-site scripting) attacks. Use \`textContent\` instead.
</warning>

### Modifying Attributes

\`\`\`javascript
const link = document.querySelector("a");

// Get attribute
const href = link.getAttribute("href");

// Set attribute
link.setAttribute("href", "https://example.com");
link.setAttribute("target", "_blank");

// Remove attribute
link.removeAttribute("target");

// Check if attribute exists
const hasHref = link.hasAttribute("href");

// Direct property access (for standard attributes)
const img = document.querySelector("img");
img.src = "image.jpg";
img.alt = "Description";

// data-* attributes
const card = document.querySelector(".card");
card.dataset.id = "123";       // Sets data-id="123"
card.dataset.userName = "Bob"; // Sets data-user-name="Bob"
console.log(card.dataset.id);  // "123"
\`\`\`

### Modifying Styles

\`\`\`javascript
const box = document.querySelector(".box");

// Individual style properties (camelCase!)
box.style.backgroundColor = "blue";
box.style.fontSize = "20px";
box.style.marginTop = "10px";
box.style.display = "flex";

// Multiple styles at once
box.style.cssText = "background: red; color: white; padding: 20px;";

// Get computed styles (includes CSS file styles)
const computed = window.getComputedStyle(box);
console.log(computed.backgroundColor);
console.log(computed.width);
\`\`\`

### Working with Classes

\`\`\`javascript
const element = document.querySelector(".card");

// Add class
element.classList.add("active");
element.classList.add("highlight", "visible");  // Multiple

// Remove class
element.classList.remove("active");

// Toggle class (add if missing, remove if present)
element.classList.toggle("active");

// Check if class exists
const hasActive = element.classList.contains("active");

// Replace class
element.classList.replace("old-class", "new-class");

// Old way (avoid)
element.className = "card active";  // Overwrites all classes!
\`\`\`

<tip>
💡 Use \`classList\` methods instead of setting \`className\` directly — it's safer and more flexible!
</tip>

### Practical Example

\`\`\`javascript
// Dark mode toggle
const toggleBtn = document.querySelector("#dark-mode-toggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    
    // Update button text
    const isDark = body.classList.contains("dark-mode");
    toggleBtn.textContent = isDark ? "Light Mode" : "Dark Mode";
    
    // Save preference
    localStorage.setItem("darkMode", isDark);
});

// Load saved preference on page load
if (localStorage.getItem("darkMode") === "true") {
    body.classList.add("dark-mode");
    toggleBtn.textContent = "Light Mode";
}
\`\`\`

The DOM is your gateway to interactive web pages! 🎨
          `
        },
        {
          id: "5-2",
          title: "Events and Event Handling",
          duration: "15 min",
          content: `
## Events — Responding to User Actions 🎯

Events let your page respond to clicks, key presses, form submissions, and more!

### Adding Event Listeners

\`\`\`javascript
const button = document.querySelector("#myButton");

// addEventListener (recommended)
button.addEventListener("click", function(event) {
    console.log("Button clicked!");
    console.log(event);  // Event object with details
});

// Arrow function
button.addEventListener("click", (e) => {
    console.log("Clicked!", e.target);
});

// Named function (easier to remove later)
function handleClick(e) {
    console.log("Handled!");
}
button.addEventListener("click", handleClick);

// Remove event listener
button.removeEventListener("click", handleClick);
\`\`\`

### Common Event Types

\`\`\`javascript
// Mouse events
element.addEventListener("click", handler);      // Single click
element.addEventListener("dblclick", handler);   // Double click
element.addEventListener("mouseenter", handler); // Mouse enters
element.addEventListener("mouseleave", handler); // Mouse leaves
element.addEventListener("mousemove", handler);  // Mouse moves
element.addEventListener("mousedown", handler);  // Mouse button pressed
element.addEventListener("mouseup", handler);    // Mouse button released

// Keyboard events
document.addEventListener("keydown", handler);   // Key pressed
document.addEventListener("keyup", handler);     // Key released
document.addEventListener("keypress", handler);  // Character typed (deprecated)

// Form events
form.addEventListener("submit", handler);        // Form submitted
input.addEventListener("input", handler);        // Value changes (real-time)
input.addEventListener("change", handler);       // Value changes (on blur)
input.addEventListener("focus", handler);        // Element focused
input.addEventListener("blur", handler);         // Element loses focus

// Window events
window.addEventListener("load", handler);        // Page fully loaded
window.addEventListener("DOMContentLoaded", handler); // DOM ready
window.addEventListener("resize", handler);      // Window resized
window.addEventListener("scroll", handler);      // Page scrolled
\`\`\`

### The Event Object

\`\`\`javascript
document.addEventListener("click", (event) => {
    // Common properties
    console.log(event.type);       // "click"
    console.log(event.target);     // Element that triggered event
    console.log(event.currentTarget); // Element with the listener
    console.log(event.timeStamp);  // When event occurred
    
    // Mouse position
    console.log(event.clientX, event.clientY);  // Viewport position
    console.log(event.pageX, event.pageY);      // Page position
    
    // Modifier keys
    console.log(event.shiftKey);   // Was Shift held?
    console.log(event.ctrlKey);    // Was Ctrl held?
    console.log(event.altKey);     // Was Alt held?
    console.log(event.metaKey);    // Was Cmd/Win held?
});

// Keyboard events
document.addEventListener("keydown", (event) => {
    console.log(event.key);        // "a", "Enter", "Escape", etc.
    console.log(event.code);       // "KeyA", "Enter", etc.
    console.log(event.repeat);     // Is key being held?
});
\`\`\`

### Prevent Default Behavior

\`\`\`javascript
// Prevent form submission (page reload)
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Form submitted without reload!");
    // Handle form data with JavaScript instead
});

// Prevent link navigation
link.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Link clicked but not followed!");
});

// Prevent right-click menu
document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    console.log("Custom right-click menu!");
});
\`\`\`

### Event Bubbling and Capturing

\`\`\`javascript
// Events bubble UP by default
// grandparent → parent → child

// Click on child:
// 1. Child handler fires
// 2. Parent handler fires
// 3. Grandparent handler fires

parent.addEventListener("click", () => {
    console.log("Parent clicked!");
});

child.addEventListener("click", (e) => {
    console.log("Child clicked!");
    e.stopPropagation();  // Stop bubbling to parent!
});

// Capture phase (fires BEFORE bubbling)
parent.addEventListener("click", () => {
    console.log("Captured at parent!");
}, true);  // Third argument enables capture
\`\`\`

### Event Delegation

Instead of adding listeners to many elements, add ONE to the parent:

\`\`\`javascript
// ❌ Bad - listener on every button
document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("click", handleClick);
});

// ✅ Good - one listener on parent (event delegation)
document.querySelector(".button-container").addEventListener("click", (e) => {
    if (e.target.classList.contains("btn")) {
        console.log("Button clicked:", e.target.textContent);
    }
});

// Works even for dynamically added buttons!
\`\`\`

<tip>
💡 Event delegation is essential for dynamic content! Elements added after page load will still trigger the parent's event listener.
</tip>

### Practical Examples

\`\`\`javascript
// Form validation
const form = document.querySelector("#signup-form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const errors = [];
    
    if (!email.value.includes("@")) {
        errors.push("Please enter a valid email");
    }
    
    if (password.value.length < 8) {
        errors.push("Password must be at least 8 characters");
    }
    
    if (errors.length > 0) {
        alert(errors.join("\\n"));
    } else {
        console.log("Form is valid!");
        // Submit form data...
    }
});

// Real-time input feedback
email.addEventListener("input", (e) => {
    const isValid = e.target.value.includes("@");
    e.target.style.borderColor = isValid ? "green" : "red";
});
\`\`\`

Events make your pages come alive! ⚡
          `
        }
      ]
    },
    {
      id: 6,
      title: "Asynchronous JavaScript",
      description: "Callbacks, Promises, and async/await",
      lessons: [
        {
          id: "6-1",
          title: "Understanding Asynchronous Code",
          duration: "14 min",
          content: `
## Async JavaScript — Non-Blocking Code ⏳

JavaScript is single-threaded but can handle asynchronous operations without blocking!

### Synchronous vs Asynchronous

\`\`\`javascript
// Synchronous - blocks until complete
console.log("1");
console.log("2");
console.log("3");
// Output: 1, 2, 3 (in order)

// Asynchronous - doesn't block
console.log("1");
setTimeout(() => console.log("2"), 1000);
console.log("3");
// Output: 1, 3, 2 (2 comes after 1 second!)
\`\`\`

### The Event Loop

\`\`\`
┌─────────────────────────────────────────────────┐
│  Call Stack                                      │
│  (Executes code, one frame at a time)           │
└─────────────────────────────────────────────────┘
                      ↓
┌─────────────────────────────────────────────────┐
│  Web APIs (Browser)                              │
│  setTimeout, fetch, DOM events, etc.            │
└─────────────────────────────────────────────────┘
                      ↓
┌─────────────────────────────────────────────────┐
│  Callback Queue / Task Queue                     │
│  (Waits for call stack to be empty)             │
└─────────────────────────────────────────────────┘
                      ↓
┌─────────────────────────────────────────────────┐
│  Event Loop                                      │
│  (Moves callbacks from queue to stack)          │
└─────────────────────────────────────────────────┘
\`\`\`

### Callbacks

Functions passed to be called later:

\`\`\`javascript
// Simple callback
function greet(name, callback) {
    console.log("Hello, " + name);
    callback();
}

greet("Alice", function() {
    console.log("Callback executed!");
});

// Async callback
function fetchData(callback) {
    setTimeout(() => {
        const data = { name: "Alice", age: 30 };
        callback(data);
    }, 2000);
}

fetchData((data) => {
    console.log("Received:", data);
});
console.log("Fetching data...");
// Output:
// "Fetching data..."
// (2 seconds later) "Received: { name: 'Alice', age: 30 }"
\`\`\`

### Callback Hell 😱

\`\`\`javascript
// Nested callbacks become hard to read and maintain
getUserData(userId, (user) => {
    getOrders(user.id, (orders) => {
        getOrderDetails(orders[0].id, (details) => {
            getShippingInfo(details.shippingId, (shipping) => {
                // This is "callback hell" or "pyramid of doom"
                console.log(shipping);
            });
        });
    });
});
\`\`\`

### Promises

A cleaner way to handle async operations:

\`\`\`javascript
// Creating a Promise
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true;
        if (success) {
            resolve("Data loaded!");  // Success
        } else {
            reject("Error loading data");  // Failure
        }
    }, 2000);
});

// Using a Promise
myPromise
    .then(result => {
        console.log("Success:", result);
    })
    .catch(error => {
        console.log("Error:", error);
    })
    .finally(() => {
        console.log("Promise completed");
    });
\`\`\`

### Promise States

\`\`\`
Promise States:
┌─────────────┐
│   PENDING   │  Initial state
└──────┬──────┘
       │
       ├──────────────────────┐
       ↓                      ↓
┌─────────────┐        ┌─────────────┐
│  FULFILLED  │        │  REJECTED   │
│  (resolved) │        │  (error)    │
└─────────────┘        └─────────────┘
\`\`\`

### Promise Chaining

\`\`\`javascript
function fetchUser(id) {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ id, name: "Alice" }), 500);
    });
}

function fetchOrders(user) {
    return new Promise((resolve) => {
        setTimeout(() => resolve([{ orderId: 1, userId: user.id }]), 500);
    });
}

// Clean chain (no callback hell!)
fetchUser(1)
    .then(user => {
        console.log("Got user:", user);
        return fetchOrders(user);
    })
    .then(orders => {
        console.log("Got orders:", orders);
    })
    .catch(error => {
        console.log("Error:", error);
    });
\`\`\`

### Promise.all, race, allSettled

\`\`\`javascript
const promise1 = fetch("/api/users");
const promise2 = fetch("/api/products");
const promise3 = fetch("/api/orders");

// Promise.all - wait for ALL (fails if ANY fails)
Promise.all([promise1, promise2, promise3])
    .then(results => console.log("All done:", results))
    .catch(error => console.log("One failed:", error));

// Promise.race - first to complete wins
Promise.race([promise1, promise2, promise3])
    .then(first => console.log("First done:", first));

// Promise.allSettled - wait for all, get all results
Promise.allSettled([promise1, promise2, promise3])
    .then(results => {
        results.forEach(result => {
            if (result.status === "fulfilled") {
                console.log("Success:", result.value);
            } else {
                console.log("Failed:", result.reason);
            }
        });
    });

// Promise.any - first SUCCESS wins (ignores failures)
Promise.any([promise1, promise2, promise3])
    .then(first => console.log("First success:", first));
\`\`\`

<tip>
💡 Use \`Promise.all\` when you need ALL results. Use \`Promise.allSettled\` when you want results even if some fail.
</tip>

Promises are the foundation of modern async JavaScript! 🔮
          `
        },
        {
          id: "6-2",
          title: "Async/Await and Fetch API",
          duration: "15 min",
          content: `
## Async/Await — Promises Made Beautiful ✨

Async/await is syntactic sugar over Promises that makes async code look synchronous!

### Basic Async/Await

\`\`\`javascript
// Promise way
function fetchData() {
    return fetch('/api/data')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
}

// Async/await way - same thing, cleaner!
async function fetchData() {
    try {
        const response = await fetch('/api/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
\`\`\`

### Rules of Async/Await

\`\`\`javascript
// 1. async functions ALWAYS return a Promise
async function greet() {
    return "Hello!";  // Wrapped in Promise.resolve()
}

greet().then(msg => console.log(msg));  // "Hello!"

// 2. await can ONLY be used inside async functions
// (or at top level in modules)

async function example() {
    const result = await somePromise();  // ✅ Works
}

// await somePromise();  // ❌ Error (not in async function)

// 3. await pauses execution until Promise resolves
async function demo() {
    console.log("Start");
    await new Promise(r => setTimeout(r, 2000));
    console.log("After 2 seconds");
}
\`\`\`

### Error Handling

\`\`\`javascript
// Try/catch for async errors
async function fetchUser(id) {
    try {
        const response = await fetch(\`/api/users/\${id}\`);
        
        if (!response.ok) {
            throw new Error(\`HTTP error! status: \${response.status}\`);
        }
        
        const user = await response.json();
        return user;
    } catch (error) {
        console.error("Failed to fetch user:", error);
        throw error;  // Re-throw to let caller handle it
    }
}

// Or use .catch() on the returned Promise
fetchUser(1)
    .then(user => console.log(user))
    .catch(error => console.error(error));
\`\`\`

### The Fetch API

\`\`\`javascript
// GET request
async function getUsers() {
    const response = await fetch('https://api.example.com/users');
    const users = await response.json();
    return users;
}

// POST request
async function createUser(userData) {
    const response = await fetch('https://api.example.com/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
    
    const newUser = await response.json();
    return newUser;
}

// PUT, PATCH, DELETE
async function updateUser(id, data) {
    const response = await fetch(\`https://api.example.com/users/\${id}\`, {
        method: 'PUT',  // or 'PATCH' for partial update
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });
    return response.json();
}

async function deleteUser(id) {
    const response = await fetch(\`https://api.example.com/users/\${id}\`, {
        method: 'DELETE',
    });
    return response.ok;
}
\`\`\`

### Parallel vs Sequential

\`\`\`javascript
// Sequential - slow! Each awaits the previous
async function sequential() {
    const user = await fetchUser(1);       // Wait...
    const orders = await fetchOrders(1);   // Then wait...
    const products = await fetchProducts();  // Then wait...
    // Total time: sum of all
}

// Parallel - fast! All start at once
async function parallel() {
    const [user, orders, products] = await Promise.all([
        fetchUser(1),
        fetchOrders(1),
        fetchProducts()
    ]);
    // Total time: longest one
}

// Start parallel, process as they come
async function parallelProcess() {
    const userPromise = fetchUser(1);
    const ordersPromise = fetchOrders(1);
    
    // Do something else while waiting...
    console.log("Fetching...");
    
    const user = await userPromise;
    console.log("Got user!");
    
    const orders = await ordersPromise;
    console.log("Got orders!");
}
\`\`\`

<warning>
⚠️ Don't use \`await\` in a loop if the operations can run in parallel! Use \`Promise.all\` instead.
</warning>

### Real-World Example

\`\`\`javascript
// API service module
const API_BASE = 'https://api.example.com';

const api = {
    async get(endpoint) {
        const response = await fetch(\`\${API_BASE}\${endpoint}\`);
        if (!response.ok) throw new Error(\`HTTP \${response.status}\`);
        return response.json();
    },
    
    async post(endpoint, data) {
        const response = await fetch(\`\${API_BASE}\${endpoint}\`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });
        if (!response.ok) throw new Error(\`HTTP \${response.status}\`);
        return response.json();
    }
};

// Usage
async function loadDashboard() {
    try {
        const [user, stats, notifications] = await Promise.all([
            api.get('/user/profile'),
            api.get('/user/stats'),
            api.get('/user/notifications')
        ]);
        
        renderDashboard({ user, stats, notifications });
    } catch (error) {
        showError('Failed to load dashboard');
    }
}

// With loading state
async function loadWithState(setState) {
    setState({ loading: true, error: null });
    
    try {
        const data = await api.get('/data');
        setState({ loading: false, data });
    } catch (error) {
        setState({ loading: false, error: error.message });
    }
}
\`\`\`

<tip>
💡 Always handle errors in async code! Unhandled Promise rejections can crash your app in Node.js.
</tip>

Async/await makes asynchronous code a joy to write! 🎉
          `
        }
      ]
    },
    {
      id: 7,
      title: "ES6+ Modern Features",
      description: "Modern JavaScript syntax and features",
      lessons: [
        {
          id: "7-1",
          title: "ES6 Essential Features",
          duration: "15 min",
          content: `
## Modern JavaScript — ES6 and Beyond 🚀

ES6 (2015) was a game-changer! Let's master the features that make JavaScript modern and powerful.

### Let and Const

\`\`\`javascript
// Block scoping
if (true) {
    var varVariable = "I leak!";
    let letVariable = "I stay here";
    const constVariable = "Me too";
}
console.log(varVariable);   // "I leak!"
// console.log(letVariable);   // Error! Not defined
// console.log(constVariable); // Error! Not defined

// Const with objects/arrays
const person = { name: "Alice" };
person.name = "Bob";  // ✅ OK - modifying content
// person = {};       // ❌ Error - can't reassign

const arr = [1, 2, 3];
arr.push(4);     // ✅ OK
// arr = [4, 5, 6];  // ❌ Error
\`\`\`

### Template Literals

\`\`\`javascript
const name = "World";
const price = 29.99;

// Multi-line strings
const html = \`
    <div class="card">
        <h2>\${name}</h2>
        <p>Price: $\${price.toFixed(2)}</p>
    </div>
\`;

// Expressions
const message = \`Total: $\${price * 1.1} (with tax)\`;

// Tagged templates
function highlight(strings, ...values) {
    return strings.reduce((result, str, i) => {
        const value = values[i] ? \`<mark>\${values[i]}</mark>\` : '';
        return result + str + value;
    }, '');
}

const result = highlight\`Hello \${name}, your total is \${price}\`;
// "Hello <mark>World</mark>, your total is <mark>29.99</mark>"
\`\`\`

### Destructuring

\`\`\`javascript
// Object destructuring
const user = { name: "Alice", age: 30, city: "NYC" };
const { name, age } = user;

// Rename + default
const { name: userName, country = "USA" } = user;

// Nested
const data = { user: { profile: { email: "a@b.com" } } };
const { user: { profile: { email } } } = data;

// Array destructuring
const colors = ["red", "green", "blue"];
const [first, second, third] = colors;
const [primary, , tertiary] = colors;  // Skip green

// Swap variables
let a = 1, b = 2;
[a, b] = [b, a];  // a=2, b=1

// Function parameters
function createUser({ name, age = 18, email }) {
    return { name, age, email };
}

createUser({ name: "Bob", email: "bob@email.com" });
\`\`\`

### Spread and Rest Operators

\`\`\`javascript
// Spread in arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];  // [1, 2, 3, 4, 5, 6]
const copy = [...arr1];  // Shallow copy

// Spread in objects
const defaults = { theme: "dark", lang: "en" };
const userPrefs = { lang: "es" };
const settings = { ...defaults, ...userPrefs };
// { theme: "dark", lang: "es" }

// Rest in destructuring
const [first, ...rest] = [1, 2, 3, 4, 5];
// first = 1, rest = [2, 3, 4, 5]

const { name, ...other } = { name: "Alice", age: 30, city: "NYC" };
// name = "Alice", other = { age: 30, city: "NYC" }

// Rest parameters
function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}
sum(1, 2, 3, 4, 5);  // 15
\`\`\`

### Enhanced Object Literals

\`\`\`javascript
const name = "Alice";
const age = 30;

// Shorthand properties
const user = { name, age };  // Same as { name: name, age: age }

// Shorthand methods
const calculator = {
    add(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    }
};

// Computed property names
const key = "dynamic";
const obj = {
    [key]: "value",
    [\`\${key}Key\`]: "another value",
    [\`get\${key.charAt(0).toUpperCase() + key.slice(1)}\`]() {
        return this[key];
    }
};
// { dynamic: "value", dynamicKey: "another value", getDynamic: [Function] }
\`\`\`

### Default Parameters

\`\`\`javascript
// Old way
function greet(name) {
    name = name || "Guest";
    return "Hello, " + name;
}

// New way
function greet(name = "Guest") {
    return \`Hello, \${name}\`;
}

// With other defaults
function createUser(name, role = "user", active = true) {
    return { name, role, active };
}

// Expressions as defaults
function getDefault() {
    return "computed";
}

function example(value = getDefault()) {
    return value;
}
\`\`\`

<tip>
💡 Default parameters are only used when the argument is \`undefined\`, not for other falsy values like \`null\`, \`0\`, or \`""\`.
</tip>

### Classes

\`\`\`javascript
class Animal {
    constructor(name) {
        this.name = name;
    }
    
    speak() {
        console.log(\`\${this.name} makes a sound\`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);  // Call parent constructor
        this.breed = breed;
    }
    
    speak() {
        console.log(\`\${this.name} barks!\`);
    }
    
    // Static method
    static isDog(animal) {
        return animal instanceof Dog;
    }
}

const rex = new Dog("Rex", "German Shepherd");
rex.speak();  // "Rex barks!"
Dog.isDog(rex);  // true
\`\`\`

ES6 features make JavaScript cleaner and more expressive! ✨
          `
        },
        {
          id: "7-2",
          title: "ES2017+ Features",
          duration: "12 min",
          content: `
## Beyond ES6 — Newer JavaScript Features 🆕

JavaScript keeps evolving! Let's explore features from ES2017 and beyond.

### Object Methods (ES2017)

\`\`\`javascript
const user = { name: "Alice", age: 30, city: "NYC" };

// Object.entries() - get key-value pairs
Object.entries(user);
// [["name", "Alice"], ["age", 30], ["city", "NYC"]]

// Object.values() - get values only
Object.values(user);  // ["Alice", 30, "NYC"]

// Object.keys() - get keys only (ES5)
Object.keys(user);  // ["name", "age", "city"]

// Object.fromEntries() (ES2019)
const entries = [["a", 1], ["b", 2]];
Object.fromEntries(entries);  // { a: 1, b: 2 }

// Transform object
const doubled = Object.fromEntries(
    Object.entries({ a: 1, b: 2, c: 3 })
        .map(([key, val]) => [key, val * 2])
);
// { a: 2, b: 4, c: 6 }
\`\`\`

### String Methods

\`\`\`javascript
// padStart / padEnd (ES2017)
"5".padStart(3, "0");   // "005"
"5".padEnd(3, "0");     // "500"
"hi".padStart(5);       // "   hi" (space padded)

// trimStart / trimEnd (ES2019)
"  hello  ".trimStart();  // "hello  "
"  hello  ".trimEnd();    // "  hello"
"  hello  ".trim();       // "hello"

// replaceAll (ES2021)
"banana".replace("a", "o");     // "bonana" (first only)
"banana".replaceAll("a", "o");  // "bonono" (all)

// at() (ES2022)
"hello".at(0);   // "h"
"hello".at(-1);  // "o" (last character!)
\`\`\`

### Array Methods

\`\`\`javascript
// flat() / flatMap() (ES2019)
[1, [2, [3, [4]]]].flat();     // [1, 2, [3, [4]]]
[1, [2, [3, [4]]]].flat(2);    // [1, 2, 3, [4]]
[1, [2, [3, [4]]]].flat(Infinity); // [1, 2, 3, 4]

[[1, 2], [3, 4]].flatMap(arr => arr.map(x => x * 2));
// [2, 4, 6, 8]

// at() (ES2022)
const arr = [1, 2, 3, 4, 5];
arr.at(0);   // 1
arr.at(-1);  // 5 (last!)
arr.at(-2);  // 4 (second to last!)

// findLast / findLastIndex (ES2023)
[1, 2, 3, 4, 5].findLast(n => n > 2);      // 5
[1, 2, 3, 4, 5].findLastIndex(n => n > 2); // 4

// toSorted / toReversed / toSpliced (ES2023) - non-mutating!
const original = [3, 1, 2];
const sorted = original.toSorted((a, b) => a - b);  // [1, 2, 3]
const reversed = original.toReversed();  // [2, 1, 3]
console.log(original);  // [3, 1, 2] - unchanged!

// with() (ES2023) - replace at index without mutating
const arr2 = [1, 2, 3];
const newArr = arr2.with(1, 99);  // [1, 99, 3]
console.log(arr2);  // [1, 2, 3] - unchanged!
\`\`\`

### Optional Chaining & Nullish Coalescing

\`\`\`javascript
// Optional chaining (?.) - ES2020
const user = {
    name: "Alice",
    address: { city: "NYC" }
};

user?.address?.city;     // "NYC"
user?.phone?.number;     // undefined (no error!)
user?.getName?.();       // undefined (method doesn't exist)
user?.friends?.[0];      // undefined (no friends array)

// Nullish coalescing (??) - ES2020
const value = null ?? "default";     // "default"
const value2 = undefined ?? "default"; // "default"
const value3 = 0 ?? "default";       // 0 (0 is not null/undefined!)
const value4 = "" ?? "default";      // "" (empty string is not null/undefined!)

// Compare with || (logical OR)
const value5 = 0 || "default";       // "default" (0 is falsy!)
const value6 = "" || "default";      // "default" (empty string is falsy!)

// Combining them
const result = user?.settings?.theme ?? "dark";
\`\`\`

<tip>
💡 Use \`??\` when you want to default ONLY for null/undefined. Use \`||\` when you want to default for ANY falsy value.
</tip>

### Logical Assignment Operators (ES2021)

\`\`\`javascript
// Logical OR assignment (||=)
let a = null;
a ||= "default";  // a = "default"

let b = "existing";
b ||= "default";  // b = "existing" (unchanged)

// Logical AND assignment (&&=)
let user = { name: "Alice" };
user &&= { ...user, active: true };  // Add property if user exists

// Nullish assignment (??=)
let config = { theme: null, lang: "en" };
config.theme ??= "dark";  // config.theme = "dark"
config.lang ??= "es";     // config.lang = "en" (unchanged)
\`\`\`

### Private Class Fields (ES2022)

\`\`\`javascript
class BankAccount {
    #balance = 0;  // Private field (# prefix)
    
    constructor(initialBalance) {
        this.#balance = initialBalance;
    }
    
    deposit(amount) {
        this.#balance += amount;
    }
    
    getBalance() {
        return this.#balance;
    }
    
    // Private method
    #validate(amount) {
        return amount > 0;
    }
}

const account = new BankAccount(100);
account.deposit(50);
account.getBalance();  // 150
// account.#balance;   // SyntaxError! Private field
\`\`\`

### Top-Level Await (ES2022)

\`\`\`javascript
// In ES modules (.mjs or "type": "module")
const data = await fetch('/api/data').then(r => r.json());
console.log(data);

// Before, you needed an async IIFE
(async () => {
    const data = await fetch('/api/data').then(r => r.json());
    console.log(data);
})();
\`\`\`

Stay current with JavaScript — it keeps getting better! 📈
          `
        }
      ]
    },
    {
      id: 8,
      title: "Projects & Best Practices",
      description: "Putting it all together",
      lessons: [
        {
          id: "8-1",
          title: "JavaScript Best Practices",
          duration: "12 min",
          content: `
## Writing Clean, Maintainable Code 📝

Let's learn the practices that separate amateur code from professional code!

### Naming Conventions

\`\`\`javascript
// Variables and functions: camelCase
let userName = "Alice";
let isActive = true;
function calculateTotal() {}

// Constants: UPPER_SNAKE_CASE
const MAX_RETRIES = 3;
const API_BASE_URL = "https://api.example.com";

// Classes: PascalCase
class UserAccount {}
class ShoppingCart {}

// Private (by convention): _prefix
class Example {
    _privateMethod() {}
}

// Boolean prefixes
let isLoading = false;
let hasPermission = true;
let canEdit = false;
let shouldUpdate = true;

// Descriptive names
// ❌ Bad
let d = new Date();
let arr = [];
function process(x) {}

// ✅ Good
let currentDate = new Date();
let userNames = [];
function processPayment(order) {}
\`\`\`

### Code Organization

\`\`\`javascript
// Single Responsibility - each function does ONE thing
// ❌ Bad
function processUserData(user) {
    validateUser(user);
    saveToDatabase(user);
    sendEmail(user);
    updateUI(user);
}

// ✅ Good
function processUserData(user) {
    if (!isValidUser(user)) return;
    const savedUser = await saveUser(user);
    await notifyUser(savedUser);
    return savedUser;
}

// Early returns (guard clauses)
// ❌ Bad
function getDiscount(user) {
    if (user) {
        if (user.isPremium) {
            if (user.yearsActive > 5) {
                return 0.2;
            }
            return 0.1;
        }
        return 0.05;
    }
    return 0;
}

// ✅ Good
function getDiscount(user) {
    if (!user) return 0;
    if (!user.isPremium) return 0.05;
    if (user.yearsActive <= 5) return 0.1;
    return 0.2;
}
\`\`\`

### Avoid Magic Numbers

\`\`\`javascript
// ❌ Bad
if (user.age >= 18) {}
setTimeout(fetchData, 300000);
if (password.length < 8) {}

// ✅ Good
const ADULT_AGE = 18;
const FIVE_MINUTES_MS = 5 * 60 * 1000;
const MIN_PASSWORD_LENGTH = 8;

if (user.age >= ADULT_AGE) {}
setTimeout(fetchData, FIVE_MINUTES_MS);
if (password.length < MIN_PASSWORD_LENGTH) {}
\`\`\`

### Error Handling

\`\`\`javascript
// Always handle errors
// ❌ Bad
const data = JSON.parse(userInput);

// ✅ Good
function parseJSON(str) {
    try {
        return { data: JSON.parse(str), error: null };
    } catch (error) {
        return { data: null, error: error.message };
    }
}

// Custom error classes
class ValidationError extends Error {
    constructor(message, field) {
        super(message);
        this.name = 'ValidationError';
        this.field = field;
    }
}

function validateEmail(email) {
    if (!email.includes('@')) {
        throw new ValidationError('Invalid email format', 'email');
    }
}

// Async error handling
async function fetchData() {
    try {
        const response = await fetch('/api/data');
        if (!response.ok) {
            throw new Error(\`HTTP error: \${response.status}\`);
        }
        return await response.json();
    } catch (error) {
        console.error('Fetch failed:', error);
        throw error;  // Re-throw or handle appropriately
    }
}
\`\`\`

### Avoid Mutation

\`\`\`javascript
// ❌ Bad - mutating original
function addItem(cart, item) {
    cart.push(item);
    return cart;
}

// ✅ Good - return new array
function addItem(cart, item) {
    return [...cart, item];
}

// ❌ Bad - mutating object
function updateUser(user, updates) {
    Object.assign(user, updates);
    return user;
}

// ✅ Good - return new object
function updateUser(user, updates) {
    return { ...user, ...updates };
}
\`\`\`

<tip>
💡 Immutability makes your code more predictable and easier to debug. Always prefer returning new data over mutating existing data.
</tip>

### Use Modern Features

\`\`\`javascript
// ❌ Old way
var name = user && user.profile && user.profile.name || 'Guest';

// ✅ Modern way
const name = user?.profile?.name ?? 'Guest';

// ❌ Callback hell
getData(function(a) {
    getMoreData(a, function(b) {
        getEvenMoreData(b, function(c) {
            console.log(c);
        });
    });
});

// ✅ Async/await
async function fetchAllData() {
    const a = await getData();
    const b = await getMoreData(a);
    const c = await getEvenMoreData(b);
    return c;
}

// ❌ Manual string building
var message = 'Hello, ' + name + '! You have ' + count + ' messages.';

// ✅ Template literals
const message = \`Hello, \${name}! You have \${count} messages.\`;
\`\`\`

### Comments — When and How

\`\`\`javascript
// ❌ Bad - obvious comments
// Increment i by 1
i++;

// Set name to "John"
const name = "John";

// ✅ Good - explain WHY, not WHAT
// Cache expires after 1 hour to balance freshness and performance
const CACHE_TTL = 60 * 60 * 1000;

// Using bitwise OR for faster floor operation
const index = (value / step) | 0;

// JSDoc for functions
/**
 * Calculates the total price including tax
 * @param {number} subtotal - The pre-tax amount
 * @param {number} taxRate - Tax rate as decimal (e.g., 0.1 for 10%)
 * @returns {number} The total price including tax
 */
function calculateTotal(subtotal, taxRate) {
    return subtotal * (1 + taxRate);
}
\`\`\`

Write code that your future self will thank you for! 🙏
          `
        },
        {
          id: "8-2",
          title: "Building a Complete Project",
          duration: "20 min",
          content: `
## Project: Task Manager App 📋

Let's build a complete task manager using everything we've learned!

### Project Structure

\`\`\`
task-manager/
├── index.html
├── styles.css
└── app.js
\`\`\`

### HTML Structure

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task Manager</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>📋 Task Manager</h1>
        
        <form id="task-form">
            <input type="text" id="task-input" placeholder="Add a new task..." required>
            <select id="priority-select">
                <option value="low">Low</option>
                <option value="medium" selected>Medium</option>
                <option value="high">High</option>
            </select>
            <button type="submit">Add Task</button>
        </form>
        
        <div class="filters">
            <button class="filter-btn active" data-filter="all">All</button>
            <button class="filter-btn" data-filter="active">Active</button>
            <button class="filter-btn" data-filter="completed">Completed</button>
        </div>
        
        <ul id="task-list"></ul>
        
        <div class="stats">
            <span id="task-count">0 tasks</span>
            <button id="clear-completed">Clear Completed</button>
        </div>
    </div>
    
    <script src="app.js"></script>
</body>
</html>
\`\`\`

### JavaScript Implementation

\`\`\`javascript
// Task Manager Application
class TaskManager {
    constructor() {
        this.tasks = this.loadTasks();
        this.currentFilter = 'all';
        this.init();
    }
    
    init() {
        // Cache DOM elements
        this.form = document.getElementById('task-form');
        this.input = document.getElementById('task-input');
        this.prioritySelect = document.getElementById('priority-select');
        this.taskList = document.getElementById('task-list');
        this.taskCount = document.getElementById('task-count');
        this.filterButtons = document.querySelectorAll('.filter-btn');
        this.clearBtn = document.getElementById('clear-completed');
        
        // Bind events
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        this.taskList.addEventListener('click', (e) => this.handleTaskClick(e));
        this.filterButtons.forEach(btn => {
            btn.addEventListener('click', (e) => this.handleFilter(e));
        });
        this.clearBtn.addEventListener('click', () => this.clearCompleted());
        
        // Initial render
        this.render();
    }
    
    // Generate unique ID
    generateId() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }
    
    // Load tasks from localStorage
    loadTasks() {
        const saved = localStorage.getItem('tasks');
        return saved ? JSON.parse(saved) : [];
    }
    
    // Save tasks to localStorage
    saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
    
    // Add new task
    addTask(text, priority) {
        const task = {
            id: this.generateId(),
            text: text.trim(),
            priority,
            completed: false,
            createdAt: new Date().toISOString()
        };
        
        this.tasks = [task, ...this.tasks];
        this.saveTasks();
        this.render();
    }
    
    // Toggle task completion
    toggleTask(id) {
        this.tasks = this.tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        );
        this.saveTasks();
        this.render();
    }
    
    // Delete task
    deleteTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
        this.saveTasks();
        this.render();
    }
    
    // Edit task
    editTask(id, newText) {
        this.tasks = this.tasks.map(task =>
            task.id === id ? { ...task, text: newText } : task
        );
        this.saveTasks();
        this.render();
    }
    
    // Clear completed tasks
    clearCompleted() {
        this.tasks = this.tasks.filter(task => !task.completed);
        this.saveTasks();
        this.render();
    }
    
    // Filter tasks
    getFilteredTasks() {
        switch (this.currentFilter) {
            case 'active':
                return this.tasks.filter(t => !t.completed);
            case 'completed':
                return this.tasks.filter(t => t.completed);
            default:
                return this.tasks;
        }
    }
    
    // Handle form submit
    handleSubmit(e) {
        e.preventDefault();
        const text = this.input.value.trim();
        const priority = this.prioritySelect.value;
        
        if (text) {
            this.addTask(text, priority);
            this.input.value = '';
            this.input.focus();
        }
    }
    
    // Handle task list clicks (event delegation)
    handleTaskClick(e) {
        const taskEl = e.target.closest('.task-item');
        if (!taskEl) return;
        
        const id = taskEl.dataset.id;
        
        if (e.target.classList.contains('task-checkbox')) {
            this.toggleTask(id);
        } else if (e.target.classList.contains('delete-btn')) {
            this.deleteTask(id);
        } else if (e.target.classList.contains('edit-btn')) {
            this.startEditing(taskEl, id);
        }
    }
    
    // Start editing a task
    startEditing(taskEl, id) {
        const task = this.tasks.find(t => t.id === id);
        const textEl = taskEl.querySelector('.task-text');
        
        const input = document.createElement('input');
        input.type = 'text';
        input.value = task.text;
        input.className = 'edit-input';
        
        textEl.replaceWith(input);
        input.focus();
        
        const saveEdit = () => {
            const newText = input.value.trim();
            if (newText && newText !== task.text) {
                this.editTask(id, newText);
            } else {
                this.render();
            }
        };
        
        input.addEventListener('blur', saveEdit);
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') saveEdit();
            if (e.key === 'Escape') this.render();
        });
    }
    
    // Handle filter clicks
    handleFilter(e) {
        this.filterButtons.forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        this.currentFilter = e.target.dataset.filter;
        this.render();
    }
    
    // Render the task list
    render() {
        const filteredTasks = this.getFilteredTasks();
        
        this.taskList.innerHTML = filteredTasks.map(task => \`
            <li class="task-item \${task.completed ? 'completed' : ''} priority-\${task.priority}"
                data-id="\${task.id}">
                <input type="checkbox" class="task-checkbox" 
                       \${task.completed ? 'checked' : ''}>
                <span class="task-text">\${this.escapeHtml(task.text)}</span>
                <span class="priority-badge">\${task.priority}</span>
                <div class="task-actions">
                    <button class="edit-btn" title="Edit">✏️</button>
                    <button class="delete-btn" title="Delete">🗑️</button>
                </div>
            </li>
        \`).join('');
        
        // Update count
        const activeCount = this.tasks.filter(t => !t.completed).length;
        this.taskCount.textContent = \`\${activeCount} task\${activeCount !== 1 ? 's' : ''} remaining\`;
    }
    
    // Escape HTML to prevent XSS
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

// Initialize the app
const app = new TaskManager();
\`\`\`

<tip>
💡 This project demonstrates: Classes, DOM manipulation, event delegation, localStorage, array methods, template literals, and defensive coding!
</tip>

### Key Patterns Used

1. **Class-based architecture** — Encapsulates all logic
2. **Event delegation** — One listener handles all task clicks
3. **Immutable updates** — \`map\` and \`filter\` return new arrays
4. **LocalStorage** — Persists data across sessions
5. **XSS prevention** — \`escapeHtml\` sanitizes user input
6. **Separation of concerns** — Methods have single responsibilities

### Next Steps

To extend this project:
- Add due dates with date picker
- Add categories/tags
- Add drag-and-drop reordering
- Add search functionality
- Sync with a backend API
- Add user authentication

Congratulations! You've completed the JavaScript Mastery course! 🎉

You now have the skills to:
- Write modern, clean JavaScript
- Manipulate the DOM effectively
- Handle asynchronous operations
- Build complete web applications

Keep coding and building projects! 🚀
          `
        }
      ]
    }
  ]
};

export default courseData;
