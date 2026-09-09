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
 * Conditional Rendering with Logical OR (||) Operator
 * || can be useful for providing a fallback value.
 *
 * Remember JavaScript's OR operator: value1 || value2
 * - means roughly: If value1 is truthy, use it. Otherwise, use value2
 *
 *
 *
 * && vs ||
 *
 * &&
 * {isLoggedIn && <Dashboard />}
 * Means: If logged in, show Dashboard.
 * There is no alternative.
 *
 * ||
 * {username || "Guest"}
 * Means: If username exists, show it; otherwise show Guest.
 *
 * && → show something conditionally
 * || → provide a fallback
 *
 */

export const Profile = ({ username }: { username: string }) => {
  console.log(username);

  return <h2>{username || "Anonymous user"}</h2>;
};
