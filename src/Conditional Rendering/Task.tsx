/**
 *
 *
 * What is Conditional Rendering?
 * - Conditional rendering is how a component decides what to display based on data, state, or user actions - wired directly into JSX.
 *
 *
 * - Conditional rendering means displaying different JSX depending on whether a condition is true or false.
 *
 *
 */

interface TaskPropTypes {
  name: string;
  isDone: boolean;
}

export default function Task({ name, isDone }: TaskPropTypes) {
  // Declare a variable
  let list;

  // Conditionally assigning JSX to a variable
  // When logic needs more than one line
  if (isDone) {
    list = <li>Done: {name}</li>;
  } else {
    list = <li>Not Done: {name}</li>;
  }

  return list;

  // Logical AND (&&) Operator
  // Best for a single optional branch. If condition, render A, Otherwise nothing.
  return isDone === true && <li className="m-3 text-lg">Completed: {name}</li>;
  return isDone === false && <li className="m-3 text-lg">Hurry up: {name}</li>;

  // Logical OR (||) Operator
  return isDone === false || <li className="m-3 text-lg">Done up: {name}</li>;

  // Using Ternary Operator - ES6
  // Compact and embedded directly inside JSX
  return isDone === true ? (
    <li className="m-3 text-lg">Completed: {name}</li>
  ) : (
    <li className="my-3 text-lg">Pending: {name}</li>
  );

  // Using Traditional if-else
  // Best for early exits like returning null
  if (isDone === true) {
    return <li className="m-3 text-lg">Completed: {name}</li>;
  } else {
    return <li className="my-3 text-lg">Pending: {name}</li>;
  }

  // return <li className="my-3 text-lg">Pending: {name}</li>;
}

// Ternary operator
// condition ? true : false;
// const time: number = 5 > 10 ? 100 : 20;
