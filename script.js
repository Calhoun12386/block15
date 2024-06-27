const userInputString = prompt(
  "Please enter some integers separated by commas."
);

const stringArray = userInputString.split(",");

const list = [];

for (let item of stringArray) {
  let found = false;
  for (let i = 0; i < list.length; i++) {
    if (list[i].name === item) {
      list[i].qty++;
      found = true;
    }
  }

  if (!found) {
    const order = {
      name: item,
      qty: 1,
    };
    list.push(order);
  }
}

console.log(list);
console.table(list);

