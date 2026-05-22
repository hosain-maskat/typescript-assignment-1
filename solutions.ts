// Problem 1: Filter Even Numbers
function filterEvenNumbers(numbers: number[]): number[] {
  return numbers.filter((num) => num % 2 === 0);
}

// Problem 2: Reverse String
function reverseString(str: string): string {
  return str.split("").reverse().join("");
}

// Problem 3: Type Guarding with Union Types
type StringOrNumber = string | number;

function checkType(input: StringOrNumber): string {
  if (typeof input === "string") {
    return "String";
  }
  return "Number";
}

// Problem 4: Generic Property Getter
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

// Problem 5: Book Interface and Read Status
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

function toggleReadStatus(book: Book): Book & { isRead: boolean } {
  return { ...book, isRead: true };
}

// Problem 6: Object-Oriented Classes (Person & Student)
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

// Problem 7: Array Intersection
function getIntersection(arr1: number[], arr2: number[]): number[] {
  return arr1.filter((element) => arr2.includes(element));
}
