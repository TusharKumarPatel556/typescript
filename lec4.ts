export {};
let value: [number, string, number];
value = [1, "tushar", 12];
value.push("tudhdvalue");
console.log(value);
let data: readonly [number, number];
data = [12, 34];
console.log(data);

let fullname: [fname: string, lname: string]; //named type tuple
fullname = ["tushar", "patel"];
console.log(fullname);
const [fname, lname] = fullname;

console.log(fname, lname);
