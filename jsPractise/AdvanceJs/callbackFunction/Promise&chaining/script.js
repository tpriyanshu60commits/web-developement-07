const myPromise = new Promise((resolve, reject) => {
  let success = false;
  if (success) {
    resolve("task Completed");
  } else {
    reject("Task incompleted");
  }
});

myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data received");
    }, 2000);
  });
}
getData().then((data) => {
  console.log(data);
});

function selectProduct() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Product Selected");
    }, 2000);
  });
}
function makePayement() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Payment successful");
    }, 2000);
  });
}
function placeOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Order placed");
    }, 2000);
  });
}
selectProduct()
  .then((data1) => {
    console.log(data1);
    return makePayement();
  })
  .then((data2) => {
    console.log(data2);
    return placeOrder();
  })
  .then((data3) => {
    console.log(data3);
    console.log("Shopping completed");
  });

function add(num) {
  return new Promise((resolve, reject) => {
    resolve(num + 10);
  });
}
add(5)
  .then((result) => {
    console.log(result);
    return result * 2;
  })
  .then((result) => {
    console.log(result);
  });
