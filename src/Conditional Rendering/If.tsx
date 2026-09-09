/*  

             Condition
                 ↓
        ┌────────┼────────┐
        ↓        ↓        ↓
       if      ternary    &&
        │        │        │
   complex     A or B   only if
   logic                  true

                 ↓
                ||
             fallback

*/

// In normal JavaScript:

const isLoggedIn: boolean = true;

if (isLoggedIn) {
  console.log("Welcome");
} else {
  console.log("Please log in");
}

// In React, we use the same idea to decide what should appear on the screen.

/* The line if (isLoggedIn) <h1>Hello, User</h1>; doesn't work in React because JSX elements are not actions; they are values.

In standard JavaScript, an if statement executes an action (like x = 5 or console.log()). 

However, writing <h1>Hello, User</h1> is just creating a JavaScript object. 

Without a return keyword, React creates that object and then immediately throws it away, doing nothing with it.

Here is a breakdown of what happens behind the scenes:

1. What JSX actually compiles to
=> Under the hood, your JSX code compiles into a standard JavaScript function call (React.createElement or a JSX runtime function):

// What you wrote:
if (isLoggedIn) <h1>Hello, User</h1>;

// What the browser actually sees:
if (isLoggedIn) _jsx("h1", { children: "Hello, User" }); // Result: The function executes and returns a value, but JavaScript drops it on the floor.

=> Notice that the function is called, but its result isn't being saved, assigned, or returned. It is the equivalent of writing:

     if (isLoggedIn) "Hello, User"; // The string is created, but nothing happens to it.


// What you wrote:
if (isLoggedIn) return <h1>Hello, User</h1>;

// What it compiles to:
if (isLoggedIn) return _jsx("h1", { children: "Hello, User" }); // Result: The function executes, and the 'return' passes that value back to React to render.

*/

// Conditional Rendering with if
export function Profile({ isLoggedIn }: { isLoggedIn: boolean }) {
  // console.log(isLoggedIn);

  // Important: without return, it can not show anything.

  // To make it work, you simply need to tell JavaScript to send that value back to React using the return keyword:
  if (isLoggedIn) return <h1>Hello, User</h1>;

  //   if (isLoggedIn) {
  //     return <h1>Welcome back!</h1>;
  //   }

  return <h1>Please Log in</h1>;

  // using Ternary operator
  return isLoggedIn ? <h1>Hello, User</h1> : <h1>Please Log in</h1>;
}

// How React renders components
// React components must explicitly return a JSX element so that React knows what to paint on the screen.
// Because there is no return inside your if statement, JavaScript ignores the JSX block and moves straight to the next line:
export function Profile1({ isLoggedIn }: { isLoggedIn: boolean }) {
  if (isLoggedIn) {
    // 1. If true, JavaScript evaluates this JSX object...
    <h1>Hello, User</h1>;
    // 2. ...but since there is no 'return', it moves to the next line anyway!
  }

  // 3. This line runs EVERY single time, whether logged in or not.
  return <h1>Please Log in</h1>;
}

/**
 *
 * When should you use if?
 *
 * Use if when:
 *
 * - The condition is complex.
 * - You have multiple condition.
 * - You need different blocks of JSX.
 * - You want the code to be easy to read.
 *
 */

// Real-life example
// Imagine an e-commerce website:
// items.length === 0 => Your cart is empty.
// items.length > 0 => You have X items.

// You need to type items as an array of objects or an array of an item type.
// Using unknown[] for type safety if you don't have an item interface yet
export function Cart({ items }: { items: unknown[] }) {
  // console.log(items);

  if (items.length === 0) {
    return <p>Your cart is empty.</p>;
  }

  return <p>You have {items.length} items.</p>;
}

function Dashboard({
  user,
}: {
  user?: { isVerified: boolean; isAdmin?: boolean };
}) {
  // console.log(user);

  if (!user) {
    // return <Login />;
    return <p>Please sign up</p>;
  }

  if (!user.isVerified) {
    // return <VerifyAccount />;
    return <h4>Verify your account</h4>;
  }

  if (!user.isAdmin) {
    // return <UserDashboard />;
    return <h2>User Dashboard</h2>;
  }

  // return <AdminDashboard />;
  return <h2>Admin Dashboard</h2>;
}

export default Dashboard;
