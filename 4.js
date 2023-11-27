inputArray = [3, 6, -2, -5, 7, 3]
console.log(Math.max(...inputArray.slice(1).map((x, i) => x = x * inputArray[i])))