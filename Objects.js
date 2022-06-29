const listOfProducts = [
  {
    productName: "TV",
    quantity: 10,
    description: "television",
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner",
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television",
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner",
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan",
  },
];

function getUniqueProductCount(listOfProducts) {
  let obj = {};
  for (let x in listOfProducts) {
    let pro = listOfProducts[x].productName;
    obj[pro] === undefined ? (obj[pro] = 1) : (obj[pro] += 1);
  }
  return obj;
}

function getUniquePrducts(listOfProducts, obj) {
  let qObj = [];
  let n = listOfProducts.length;
  for (let x in obj) {
    let qua = 0;
    let des = "";
    for (let i = 0; i < n; i++) {
      if (listOfProducts[i].productName === x) {
        qua = qua + listOfProducts[i].quantity;
        des = listOfProducts[i].description;
      }
    }
    qObj.push({
      productName: x,
      quantity: qua,
      description: des,
    });
  }
  return qObj;
}

let a = getUniqueProductCount(listOfProducts);
let b = getUniquePrducts(listOfProducts, a);
console.log(a);
console.log(b);
