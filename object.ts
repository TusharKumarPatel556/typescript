const student = {
  name: "tushar",
  roll: 34,
};

// student.name = 67;
console.log(student);

const student1: { name: string; roll: number } = {
  name: "tushar",
  roll: 87,
};

const car: { name: string; mileage?: number } = {
  name: "Swift",
};

car.mileage = 20;
console.log(car);
console.log(car);

const employee: { [index: string]: any } = {};
employee.name = "Tushar kumar patel";
employee.id = 678784368;
employee.hjk = ".khg";
console.log(employee);
