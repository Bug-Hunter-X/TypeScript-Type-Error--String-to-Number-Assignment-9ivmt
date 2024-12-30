# TypeScript Type Error: String to Number Assignment

This repository demonstrates a common type error in TypeScript where a string is assigned to a number variable.

## The Bug

The `combine` function attempts to add a number and a string, resulting in a type error because TypeScript's type system prevents implicit type coercion.  The error message clearly indicates that the string is not assignable to the number type.

## The Solution

The solution involves explicitly converting the string to a number using `parseInt` or `parseFloat` before the addition.  Error handling should also be considered to gracefully handle cases where the string cannot be parsed into a number.  Type guards can also be implemented for more robust type checking and validation.