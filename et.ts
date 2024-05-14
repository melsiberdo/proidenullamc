// Define the function with explicit parameter types
function createNewAssign(title: string, points: number): AssignType {
  // Function implementation goes here
}

// Use TypeScript's utility type 'Parameters' to infer the parameter types
type paramType = Parameters<typeof createNewAssign>;

// Ensure the 'paramType' tuple has the correct types for each parameter
const params: paramType = ['Assignment Title', 100];
