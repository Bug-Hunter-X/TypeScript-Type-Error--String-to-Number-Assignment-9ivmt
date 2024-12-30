function combine(a: number, b: string): number {
  const parsedB = parseInt(b, 10); // Parse the string into a number with radix 10

  if (isNaN(parsedB)) {
    return a; // Or throw an error: throw new Error('Invalid input: b is not a number'); 
  }

  return a + parsedB; 
}