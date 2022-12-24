let stocks = {
  fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let shopOpen = true;

let order = function (work, time) {
  return new Promise((resolve, reject) => {
    if (shopOpen) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log("order was rejected"));
    }
  });
};

order(() => console.log(stocks.fruits[0]), 2000).then(() => {
  return order(() => console.log("Production has started"), 0000);
});

// const promise = new Promise((resolve, reject) => {
//   let loadfile = false;
//   if (loadfile) {
//     resolve("the file is loaded");
//   } else {
//     reject("the file is not loaded");
//   }
// });
// promise
//   .then((value) => console.log(value))
//   .catch((error) => console.log(error));

const wait = (time) =>
  new Promise((resolve) => {
    setTimeout(resolve, time);
  });

wait(3000).then(() => console.log("it is working"));
