// Problem: 1
const filterEvenNumbers = (NumArray: number[]) => {
    return NumArray.filter(num => num % 2 === 0);
}

// Problem: 2
const reverseString = (str: string) => {
    return str.split('').reverse().join('');
}

// Problem: 3
type StringOrNumber = string | number;

const checkType = (input: StringOrNumber) => {
    if (typeof input === 'string') {
        return "String";
    } else if (typeof input === 'number') {
        return "Number";
    }
}

console.log(checkType("Hello"));
console.log(checkType(42));

// Problem: 4
const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
    return obj[key];
}

const user = { id: 1, name: "John Doe", age: 21 };

// Problem: 5
interface Book {
    title: string;
    author: string;
    publishedYear: number;
}

const toggleReadStatus = (book: Book) => {
    return { ...book, isRead: true };
}

const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };

// Problem: 6
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

    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}

const student = new Student("Alice", 20, "A");

// Problem: 7
const getIntersection = (array1: number[], array2: number[]): number[] => {
    return array1.filter(num => array2.includes(num));
}