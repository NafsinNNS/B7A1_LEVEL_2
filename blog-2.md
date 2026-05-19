# How `Pick` and `Omit` Utility Types Keep TypeScript Code DRY

## Introduction

As applications grow larger, developers often need different versions of the same data structure. Writing separate interfaces repeatedly can lead to duplicated code and maintenance problems.

TypeScript provides utility types like `Pick` and `Omit` to solve this issue. These utility types allow developers to create specialized versions of existing interfaces without rewriting code.

This helps maintain the DRY principle:

> DRY = Don't Repeat Yourself

In this blog, we will discuss:
- What `Pick` and `Omit` are
- How they reduce duplication
- How they improve maintainability
- Practical examples

---

# The Problem of Repeated Interfaces

Consider the following interface:

```ts
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
}
```

Now suppose we need:
- A public user profile
- A login object
- An editable user object

Without utility types, developers may rewrite interfaces manually.

## Example

```ts
interface PublicUser {
  id: number;
  name: string;
  email: string;
}

interface LoginUser {
  email: string;
  password: string;
}
```

This causes:
- Duplicate code
- Harder maintenance
- Increased inconsistency

If the main `User` interface changes, every copied interface must also be updated.

---

# Understanding `Pick`

`Pick` creates a new type by selecting specific properties from an existing type.

## Syntax

```ts
Pick<Type, Keys>
```

---

# Example of `Pick`

```ts
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
}

type PublicUser = Pick<User, "id" | "name" | "email">;
```

This creates:

```ts
type PublicUser = {
  id: number;
  name: string;
  email: string;
}
```

The new type automatically stays connected to the original interface.

---

# Benefits of `Pick`

## 1. Reduces Code Duplication

Developers reuse the main interface instead of rewriting fields manually.

---

## 2. Easier Maintenance

If the `email` type changes in `User`, it updates automatically everywhere.

---

## 3. Better Consistency

All derived types remain synchronized with the source interface.

---

# Understanding `Omit`

`Omit` works opposite to `Pick`.

Instead of selecting fields, it removes unwanted fields.

## Syntax

```ts
Omit<Type, Keys>
```

---

# Example of `Omit`

```ts
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
}

type SafeUser = Omit<User, "password">;
```

This creates:

```ts
type SafeUser = {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
}
```

The `password` field is excluded automatically.

---

# Real-World Examples

## 1. Public API Responses

Sensitive fields should not be exposed.

```ts
type PublicUser = Omit<User, "password">;
```

---

## 2. Login Forms

Only login credentials are required.

```ts
type LoginData = Pick<User, "email" | "password">;
```

---

## 3. Update Operations

Some fields should not be editable.

```ts
type UpdateUser = Omit<User, "id" | "createdAt">;
```

---

# How These Utility Types Keep Code DRY

The DRY principle encourages developers to avoid repetition.

`Pick` and `Omit` support DRY by:
- Reusing existing interfaces
- Reducing repeated code
- Simplifying updates
- Improving readability

Instead of maintaining many separate interfaces, developers can create smaller reusable slices from one master interface.

---

# Conclusion

`Pick` and `Omit` are powerful TypeScript utility types that help developers write cleaner and more maintainable code.

- `Pick` selects only the required properties.
- `Omit` removes unnecessary properties.
- Both reduce duplication and support the DRY principle.

Using these utility types makes TypeScript applications more scalable, organized, and easier to maintain.