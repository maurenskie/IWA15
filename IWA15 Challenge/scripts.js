// scripts.js

const data = {
  lists: [
    ['first', [15, 11, 13, 7, 5]],
    ['second', [2, 6, 8, 4, 14, 12, 10]],
    ['third', [9, 3, 1]],
  ],
};

// Only edit below

const [firstName, firstList] = data.lists[0];
const [secondName, secondList] = data.lists[1];
const [thirdName, thirdList] = data.lists[2];

const result = [];

const extractBiggest = () => {
  const firstLast = firstList.slice(-1)[0] || 0;
  const secondLast = secondList.slice(-1)[0] || 0;
  const thirdLast = thirdList.slice(-1)[0] || 0;

  if (firstLast >= secondLast && firstLast >= thirdLast) {
    const biggest = firstList.pop();
    result.push(biggest);
    return biggest;
  }

  if (secondLast >= firstLast && secondLast >= thirdLast) {
    const biggest = secondList.pop();
    result.push(biggest);
    return biggest;
  }

  if (thirdLast >= firstLast && thirdLast >= secondLast) {
    const biggest = thirdList.pop();
    result.push(biggest);
    return biggest;
  }
};

// Only edit above

result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());

result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());

result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());

console.log(result);
