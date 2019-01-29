import "babel-polyfill";
let a = [1, 2, 3, 4, 5];
for (let value of a.values()) {
  console.log(value, "...............");
}
tag 1
commit 2
let bb = [...a];
console.log(bb);
console.log(a.includes(1));