// async function test()
// {
//     return "hello";
// }
// test().then((data)=>
// {
//     console.log(data)
// })

// const somePromise = new Promise((resolve) => {

//   setTimeout(() => {
//     resolve("Promise Complete");
//   }, 2000);

// });

// async function test() {

//   console.log("1");

//  let result =  await somePromise;
//  console.log(result);

//   console.log("2");

// }

// console.log("Start");

// test();

// console.log("End");

// function loginAccount() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("login successfull");
//     }, 1000);
//   });
// }
// function bookTicket() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Train ticket booked");
//     }, 2000);
//   });
// }
// async function bookTrainTicket() {
//   let first = await loginAccount();
//   console.log(first);

//   let second = await bookTicket();
//   console.log(second);
//   console.log("Booking completed");
// }
// bookTrainTicket();

function checkcalue(value)
{
    return new Promise((resolve,reject)=>
    {
        if(value>10)
        {
            resolve("valid");
        }
        else
        {
            reject("Invalid");
        }
    })
}

async function validation() {
    
    try{
        let result = await checkcalue(5);
        console.log(result);
    }
    catch(error)
    {
        console.log(error);
        
    }

}
validation();
