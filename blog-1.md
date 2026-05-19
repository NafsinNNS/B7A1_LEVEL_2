# Why `any` Is a Type Safety Hole and Why `unknown` Is the Safer Choice in TypeScript

## Introduction

TypeScript improves JavaScript by adding static typing, which helps developers catch errors before running their code. However, not all TypeScript types provide the same level of safety. Two important types that developers often compare are `any` and `unknown`.

Although both can store values of any type, they behave very differently. The `any` type disables TypeScript’s type checking, while `unknown` forces developers to validate data before using it.

In this blog, we will explore:
- Why `any` is considered a type safety hole
- Why `unknown` is safer
- How type narrowing works in TypeScript

---

# Understanding the `any` Type

The `any` type tells TypeScript to skip type checking completely.

## Example

```ts
let value: any = "Hello";

console.log(value.toUpperCase());

value = 100;

// No TypeScript error
console.log(value.toUpperCase());
```

## Problem with `any`

In the example above:
1. `value` starts as a string
2. Later it becomes a number
3. Numbers do not have the `toUpperCase()` method

However, TypeScript gives no warning because the variable uses the `any` type.

This results in a runtime error:

```txt
TypeError: value.toUpperCase is not a function
```

Because `any` disables type checking, it creates a **type safety hole** in the application.

---

# Why `unknown` Is Safer

The `unknown` type can also hold any value, but TypeScript does not allow unsafe operations directly.

## Example

```ts
let value: unknown = "Hello";

// Error
console.log(value.toUpperCase());
```

TypeScript prevents the operation because it does not know whether `value` is actually a string.

Before using the value, we must check its type.

---

# Type Narrowing

Type narrowing means reducing a broad type into a more specific type using conditions.

## Example Using `typeof`

```ts
let value: unknown = "Hello";

if (typeof value === "string") {
  console.log(value.toUpperCase());
}
```

Inside the `if` block:
- TypeScript knows the variable is a string
- String methods become safe to use

This process is called **type narrowing**.

---

# Common Type Narrowing Techniques

## 1. Using `typeof`

```ts
function printNumber(value: unknown) {
  if (typeof value === "number") {
    console.log(value.toFixed(2));
  }
}
```

---

## 2. Using `instanceof`

```ts
function printDate(value: unknown) {
  if (value instanceof Date) {
    console.log(value.getFullYear());
  }
}
```

---

## 3. Using Custom Type Guards

```ts
type User = {
  name: string;
};

function isUser(value: any): value is User {
  return value && typeof value.name === "string";
}

function printUser(value: unknown) {
  if (isUser(value)) {
    console.log(value.name);
  }
}
```

Custom type guards help safely validate complex objects.

---

# Real-World Use Cases for `unknown`

The `unknown` type is useful when handling:
- API responses
- User input
- JSON data
- Third-party libraries

## Example

```ts
async function fetchData(): Promise<unknown> {
  const response = await fetch("https://api.example.com/data");
  return response.json();
}
```

Since external data can contain anything, `unknown` encourages proper validation.

---

# Conclusion

Although both `any` and `unknown` can store any type of value, they serve different purposes.

- `any` disables type checking and can introduce hidden bugs.
- `unknown` maintains type safety by requiring validation before usage.
- Type narrowing helps developers safely work with uncertain data.

In modern TypeScript applications, `unknown` is generally the better and safer choice.