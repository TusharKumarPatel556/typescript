export {};

type character = string; //aliases or duplicate name of data type
type integer = number;
// type studentType = { name: character; rollno: integer; course: character };
interface studentDataType {
  name: character;
  rollno: integer;
  course: character;
}

interface studentInfo {
  name: string;
  rollno: number;
}

interface studentType extends studentInfo {
  course: string;
}

const student1: studentDataType = {
  name: "Sachin Teottia",
  rollno: 2,
  course: "M.Tech",
};

console.log(student1);
