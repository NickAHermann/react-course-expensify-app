// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     name: "Penguin"
//   }
// };
//
// const { name: publisherName = "Self-Published" } = book.publisher;
//
// console.log(publisherName);

const address = ["1222 Morro Bay Drive", "Houston", "Texas", "77027"];

const items = ["Coffee (hot)", "$2.00", "2.50", "3.75"];

const [item, , medium] = items;

console.log(`A medium ${item} costs ${medium}`);
