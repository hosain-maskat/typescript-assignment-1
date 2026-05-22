# The Magic of Generics: How to Maintain the DRY Principle in TypeScript

## Introduction
One of the core principles of software engineering is **DRY (Don't Repeat Yourself)**, which states that code duplication should be minimized in favor of reusability. In strictly typed languages, developers often find themselves writing the exact same logic multiple times just because the data types are different. TypeScript elegantly solves this problem using **Generics**. Generics allow you to create components and functions that work over a variety of types rather than a single one, preserving absolute type safety.

## The Nightmare of Code Duplication
Imagine you need a function that wraps data into a standardized API response format. Without Generics, you would have to write separate functions for users, products, and so on:

```typescript
interface UserResponse { data: string; status: number }
interface ProductResponse { data: string; status: number }

function wrapUserResponse(item: string): UserResponse {
  return { data: item, status: 200 };
}

function wrapProductResponse(item: string): ProductResponse {
  return { data: item, status: 200 };
}