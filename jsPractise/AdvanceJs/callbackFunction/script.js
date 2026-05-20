// // callback hell
// function greet(name, callback) {
//   console.log("Hello " + name);

//   callback();
// }

// function sayBye() {
//   console.log("Bye!");
// }

// greet("Priyanshu", sayBye);

// console.log("new function");

// console.log("start function");
// setTimeout(function () {
//   console.log("this is a timeout function");
// }, 3000);

// // callback hell function
// setTimeout(function () {
//   console.log("Starter Ready");

//   setTimeout(function () {
//     console.log("Main Course Ready");
//     setTimeout(function () {
//       console.log("Dessert Ready");
//     },2000);
//   },3000);
// },5000);



function downloadFile(callback) {
    console.log("Downloading file...");

    setTimeout(() => {
        console.log("Download Complete");

        callback();
    }, 3000);
}

function openFile() {
    console.log("Opening File...");
}

downloadFile(openFile);