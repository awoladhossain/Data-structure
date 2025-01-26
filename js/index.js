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
  