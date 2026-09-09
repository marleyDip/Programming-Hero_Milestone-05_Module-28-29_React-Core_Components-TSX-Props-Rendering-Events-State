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

/**
 *
 * Conditional Rendering with Logical AND (&&) Operator
 * This is extremely common in React.
 *
 * The syntax is: condition && JSX
 * - Meaning: If the condition is true, render the JSX.
 *
 * && is best when you only need:
 * - Show something if the condition is true.
 * - You don't have an alternative UI.
 *
 */

export default function Notification({ hasMessage }: { hasMessage: boolean }) {
  return <div>{hasMessage && <p>You have a notification!</p>}</div>;
}

/*  
Think of it like:
    true  && JSX
    ↓
    JSX appears

    false && JSX
    ↓
    Nothing appears
*/

// Real-life example
// Suppose you're building a dashboard.
// You only want to show an admin panel to administrators:

export function Dashboard({ isAdmin }: { isAdmin: boolean }) {
  // console.log(isAdmin);

  return (
    <div>
      <h1>Dashboard</h1>

      {/* {isAdmin && <AdminPanel />} */}
      {isAdmin && <h2>Welcome, Deep!</h2>}
    </div>
  );
}
