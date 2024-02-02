export {};

let message: string = "tushar";
console.log(message);
let rollno: number = 20;
console.log(rollno);

let name = "Dr vipin"; //Implicit Type

console.log(name);
let choice;
choice = "Javascript";
choice = 4;
console.log(choice);

let nameundefined: undefined = undefined;

let namenull: null = null;

let data = [1, 2, 3, 4, 5, 6];
console.log(data);

let value: readonly number[] = [1, 2, 3, 4, 5, 6];
console.log(value);

let numbers: Array<any> = [1, 2, 3, 4, 5, 6];

numbers.push(100);

numbers.push("Tushar Patel");
console.log(numbers);
