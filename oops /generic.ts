// function getData(value: number) {
//   return value;
// }


function getData<T>(value: T): T {
  return value;
}

console.log(getData(10));     // number
console.log(getData("Hello")) // string