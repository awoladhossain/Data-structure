// * How do you check web storage browser support?

// if(typeof(Storage) !== "undefined") {
//     // Code for localStorage/sessionStorage.
// } else {
//     // Sorry! No Web Storage support..
// }

// console.log("Question 2");

// *  A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises provide a cleaner, more readable way to handle asynchronous code compared to traditional callback functions.

// const myPromise = new Promise((resolve, reject) => {
//   const success = true;
//   if (success) {
//     resolve("Success");
//   } else {
//     reject("Failure");
//   }
// });

// myPromise
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((message) => {
//     console.log(message);
//   })
//   .finally(() => {
//     console.log("Finally completed!!");
//   });

// * The Promise object has three states: pending, fulfilled, and rejected.

// * callback

// function greet(name, callback) {
//   console.log(`Hello, ${name}!`);
//   callback();
// }

// function sayGoodbye() {
//   console.log("Goodbye!");
// }
// // Passing `sayGoodbye` as a callback
// greet("Alice", sayGoodbye);

// console.log("Start");

// setTimeout(() => {
//     console.log("This runs after 2 seconds");
// }, 2000);

// console.log("End");

// function fetchData(callback){
//     setTimeout(()=>{
//         console.log("Fetching data");
//         callback("Data has been fetched");
//     },2000)
// }
// function processData(data){
//     console.log(`Processing the data: ${data}`);
// }
// fetchData(processData);

// * event driven language means instead of waiting for a response javascript will keep executing while listening for other events.

// function firstOne() {
//   setTimeout(() => {
//     console.log("First function");
//   }, 2000);
// }
// function secondOne() {
//   console.log("Second function");
// }
// firstOne();
// secondOne();

// * callback hell is a situation where you have multiple nested callbacks which makes the code hard to read and maintain.

// fetchUserDetails((user) => {
//   console.log("User details: ", user);

//   fetchUserOrder(user.id, (order) => {
//     console.log("Order details: ", order);

//     processOrder(orders, (processedOrder) => {
//       console.log("Processed order: ", processedOrder);
//     });
//   });
// });

// * reslove it

// fetchUserDetails()
//   .then((user) => {
//     console.log("User details: ", user);
//     return fetchUserOrder(user.id);
//   })
//   .then((orders) => {
//     console.log("Order details: ", orders);
//     return processOrder(orders);
//   })
//   .then((processedOrder) => {
//     console.log("Processed order: ", processedOrder);
//     return sendNotification(user.email);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// ** if api have a promise then we can use async await

// async function fetchData() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await response.json();
//   console.log(data);
// }
// fetchData();

// * task 1 to refactor the code using async await
// setTimeout(() => {
//   console.log("Step 1: Start");
//   setTimeout(() => {
//     console.log("Step 2: Process");
//     setTimeout(() => {
//       console.log("Step 3: Complete");
//     }, 1000);
//   }, 1000);
// }, 1000);

// async function fetchData() {
//     console.log("Step 1: Start");

//     // First delay using a Promise
//     await new Promise((resolve) => {
//       setTimeout(() => {
//         console.log("Step 2: Process");
//         resolve();
//       }, 1000);
//     });

//     // Second delay using another Promise
//     await new Promise((resolve) => {
//       setTimeout(() => {
//         console.log("Step 3: Complete");
//         resolve();
//       }, 1000);
//     });
//   }

//   // Call the function
//   fetchData();

//  **  Arrow function and what is the difference apart from syntax?

// function regularFunction() {
//     console.log(this); // `this` depends on how the function is called
//   }

//   const obj = {
//     name: "Awolad",
//     method: regularFunction,
//   };

//   obj.method(); // `this` refers to `obj`

// const arrowFunction = () => {
//     console.log(this); // `this` is inherited from surrounding scope
//   };

//   const obj2 = {
//     name: "Awolad",
//     method: arrowFunction,
//   };

//   obj2.method(); // `this` does not refer to `obj2`, it refers to the outer scope (window/global)

// function regularFunction() {
//     console.log(arguments); // Works
//   }

//   regularFunction(1, 2, 3);
// const arrowFunction = () => {
//     console.log(arguments); // ReferenceError: arguments is not defined
//   };

//   arrowFunction(1, 2, 3);

// * Call, apply bind

// *call() invokes a function immediately, allowing you to pass arguments one by one.

// const person = {
//     name: "Awolad",
//   };

//   function greet(age, country) {
//     console.log(`Hello, my name is ${this.name}, I am ${age} years old from ${country}.`);
//   }
//   greet.call(person, 25, "Bangladesh");

// * apply() is similar to call(), but it takes arguments as an array.

// const person = {
//     name: "Awolad",
//   };

//   function greet(age, country) {
//     console.log(`Hello, my name is ${this.name}, I am ${age} years old from ${country}.`);
//   }

//   greet.apply(person, [25, "Bangladesh"]);

// ** bind() does not immediately invoke the function. Instead, it returns a new function with this permanently set.

// const person = {
//   name: "Awolad",
// };

// function greet(age, country) {
//   console.log(
//     `Hello, my name is ${this.name}, I am ${age} years old from ${country}.`
//   );
// }
// const boundGreet = greet.bind(person);
// boundGreet(25, "Bangladesh");
// const boundGreet = greet.bind(person, 25, "Bangladesh");
// boundGreet();

//  ** Generator Function  ==> A generator function allows you to pause and resume execution using the yield keyword.

// function* generatroFunction() {
//   yield 1;
//   yield 2;
//   yield 3;
// }
// const gen = generatroFunction();
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

// function* gent(){
//   yield 1;
//   yield 2;
// }

// const gen = gent();
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

// **  Range Generator Function
// function* rangeGen(start, end, step = 1) {
//     for (let i = start; i <= end; i += step) {
//         yield i;
//     }
// }

// const range = rangeGen(1, 5);
// console.log(range.next());
// console.log(range.next());
// console.log(range.next());
// console.log(range.next());
// console.log(range.next());

// function* myGenerator(){
//     console.log("start");
//     yield 1;
//     console.log("after the first yield");
//     yield 2;
//     console.log("after the second yield");
//     yield 3;
//     console.log("after the third yield");
//     yield 4;
//     console.log("end");
// }

// const gen = myGenerator();
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

// function* infintyGenerator() {
//     let i=1;
//     while(true){
//         yield i++;
//     }
// }

// const counter = infintyGenerator();
// console.log(counter.next());
// console.log(counter.next());
// console.log(counter.next());
// console.log(counter.next());
// console.log(counter.next());

//   ** The spread operator is used to spread elements of an array, object, or iterable.
// function add(a, b, c) {
//     return a + b + c;
//   }
//   const values = [10, 20, 30];
//   console.log(add(...values)); // 60

// const numbers = [1, 2, 3];
// const newNumbers = [...numbers, 4, 5];

// console.log(newNumbers); // [1, 2, 3, 4, 5]

// const user = { name: "Awolad", age: 24 };
// const newUser = { ...user, country: "Bangladesh" };

// console.log(newUser); // { name: 'Awolad', age: 24, country: 'Bangladesh' }

// * The rest operator is used in function parameters to collect multiple arguments into an array.
// function sum(...numbers) {
//     return numbers.reduce((acc, num) => acc + num, 0);
//   }

//   console.log(sum(1, 2, 3, 4, 5)); // 15

// const fruits = ["Apple", "Banana", "Orange", "Mango"];
// const [first, second, ...restFruits] = fruits;

// console.log(first, second); // Apple Banana
// console.log(restFruits); // ["Orange", "Mango"]

// function sum(...numbers) {
//   return numbers.reduce((acc, num) => acc + num, 0);
// }

// console.log(sum(1, 2, 3, 4, 5)); // 15

// * forEach loop

// const numbers = [1, 2, 3];

// numbers.forEach(num => console.log(num * 2));

// * map
// const numbers = [1, 2, 3];
// const doubled = numbers.map(num => num * 2);

// console.log(doubled); // [2, 4, 6]

//  *Difference between Object.assign(), Object.create()? Which one mutates the data ?

// const person = { name: "Awolad", age: 24 };
// const additionalInfo = { country: "Bangladesh", city: "Dhaka" };

// const newPerson = Object.assign(additionalInfo, person);
// console.log(newPerson);
// console.log(person);
// console.log(additionalInfo);

// const userPrototype = {
//   greet() {
//     console.log(
//       `Hello, my name is ${this.name}, I am ${this.age} years old from ${this.country}.`
//     );
//   },
// };
// const user = Object.create(userPrototype);
// user.name = "Awolad";
// user.age = 24;
// user.country = "Bangladesh";
// user.greet();

// console.log(user);

// * Write a function component in react which returns a lazy loaded Button Component and add the Suspense with fallback UI?

// import React from "react";

// const LazyButton = React.lazy(() => import("./Button"));

// const App = () => {
//   return (
//     <div>
//       <h2>Lazy Loaded Button Example</h2>
//       {/* Suspense to handle lazy loading */}
//       <Suspense fallback={<p>Loading Button...</p>}>
//         <LazyButton />
//       </Suspense>
//     </div>
//   );
// };

// export default App;

// import React from "react";

// const Button = () => {
//   return <button>Click Me</button>;
// };

// export default Button;

//  * What is Error Boundary, How can we write a separate Error Boundary Component? (11)
/**
 * An Error Boundary is a React component that catches JavaScript errors in its child component tree and prevents the entire app from crashing. Instead, it gracefully displays an error UI.
 * ✅ Only class components can be Error Boundaries (functional components need useErrorBoundary from third-party libraries).
✅ Catches errors in render, lifecycle methods, and constructors of child components.
✅ Does NOT catch errors in:

* Event handlers
Asynchronous code (e.g., setTimeout, fetch)
Server-side rendering (SSR)
Errors inside the Error Boundary itself

ow to Write a Separate Error Boundary Component?
React provides two lifecycle methods for error handling:

static getDerivedStateFromError(error) → Updates state to display fallback UI.
componentDidCatch(error, info) → Logs the error details.
 */

//  * Step 1: Create an ErrorBoundary Component
// import React from "react";
// class ErrorBoundary extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { hasError: false };
//     }
// }
// static getDerivedStateFromError(error){
//     return { hasError: true };
// }
// componentDisCatch(error, info){
//     console.error("Error caught in ErrorBoundary:", error, info);
// }
// render(){
//     if (this.state.hasError) {
//         return <h1>Something went wrong.</h1>;
//     }
//     return this.props.children;
// }
// export default ErrorBoundary;

// // * Step 2: Create a Component That Throws an Error (BuggyComponent.js)
// import React, { useState } from "react";
// const BuggyComponent = () => {
//     const [crash, setCrash] = useState(fasle);
//      if (crash) {
//     throw new Error("Something went wrong!");
//     }
//      return (
//     <div>
//       <h3>This is a normal component.</h3>
//       <button onClick={() => setCrash(true)}>Crash the Component</button>
//     </div>
//   );
// };
// }
// export default BuggyComponent;

// // * Step 3: Use ErrorBoundary in App.js
// import React, { useState } from "react";
// import ErrorBoundary from "./ErrorBoundary";
// import BuggyComponent from "./BuggyComponent";

// const App = () => {
//   return (
//     <div>
//       <h2>React Error Boundary Example</h2>

//       {/* Wrap only components that might throw errors */}
//       <ErrorBoundary>
//         <BuggyComponent />
//       </ErrorBoundary>
//     </div>
//   );
// };

// export default App;

//  *  Write down a basic sum function using Typescript and how do you accept params in either string or number?

// function sum(a:number| string, b:number| string):number | string {
//     if(typeof a =="number" && typeof b == "number"){
//         return a + b;
//     } else {
//         return a.toString() + b.toString();
//     }
// }
// console.log(sum(10, 20)); // Output: 30 (Number Addition)
// console.log(sum("Hello, ", "World!")); // Output: "Hello, World!" (String Concatenation)
// console.log(sum(10, "20"));

//  *  What are Generics functions (inside Typescript), can you write down types ?
/**
 * Generics allow us to create reusable, type-safe functions, classes, or interfaces without specifying an exact type beforehand.

👉 Instead of hardcoding types, Generics use a placeholder (like <T>) that gets replaced with the actual type when the function is called.
 */

// function identity<T>(value: T): T{
//     return value;
// }
// console.log(identity<number>(10));      // Output: 10
// console.log(identity<string>("Hello")); // Output: "Hello"
// console.log(identity<boolean>(true));   // Output: true

//  *  Multiple Generic Types
// function pair<T, U>(first: T, second: U): [T, U] {
//   return [first, second];
// }

// console.log(pair<number, string>(1, "TypeScript")); // Output: [1, "TypeScript"]
// console.log(pair<boolean, string>(true, "Generics")); // Output: [true, "Generics"]


// *   Generic Function with Constraints (extends)
// function getLength< extends { length: number }> (value:T):number{
//     return value.length;
// }
// console.log(getLength("Hello")); // ✅ Works (string has length)
// console.log(getLength([1, 2, 3])); // ✅ Works (array has length)

// function firstElement<T>(arr: T[]): T | undefined {
//   return arr.length > 0 ? arr[0] : undefined;
// }

// console.log(firstElement([10, 20, 30])); // Output: 10
// console.log(firstElement(["A", "B", "C"])); // Output: "A"
// console.log(firstElement([])); // Output: undefined

