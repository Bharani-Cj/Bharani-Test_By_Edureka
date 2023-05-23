// //! Question -4
// const word = "Edureka Learning Center";
// const arr = word.split("");
// const reverse = arr.reverse().join("");
// console.log(reverse);

// //! Question -5
// const date1 = new Date("june 20 2019");
// const date2 = new Date("june 14 2019");
// console.log(date1.getTime() - date2.getTime());
// console.log(date1.getDate() - date2.getDate());

// //! Question -6
// //? 1-
// const array = [6, 8, 10, 12, 18];
// const red = array.reduce((acc, cur) => {
//   const ok = acc + cur;
//   return ok;
// }, 0);
// console.log(red);

// //? 2-
// let total = 0;
// for (let i = 0; i < array.length; i++) {
//   total = total + array[i];
// }
// console.log(total);

// //! Question -7
// //? a
// const obj = { id: "1", name: "Test User", age: "25", profession: "Developer" };
// const keys = Object.keys(obj);
// const values = Object.values(obj);
// const entries = Object.entries(obj);
// console.log(keys, values, entries);

// //? b
// const arra = ["1", "Test User", "25", "Developer"];
// console.log(Object.entries(arra));

// //! Question -8
// const body = document.querySelector(".q8");
// const html = `
// <div class="text-center ">
// <button class="bg-primary">Hit Me</button>
// <h3>Hello</h3>
// <p>Welcome to edureka</p>
// </div>`;
// body.insertAdjacentHTML("beforeend", html);

// //! Question -9

//! Question -10
const fs = require("fs");
const data = "<h1>This is my First fs File</h1>";
fs.writeFile("question10.html", data, "utf-8", (err) => {
  console.log("finished");
});
