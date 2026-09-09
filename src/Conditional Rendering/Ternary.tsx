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

// Conditional Rendering with Ternary ? :
// The ternary operator is useful when you have two possible outcomes.

// condition ? valueIfTrue : valueIfFalse
function User({ isLoggedIn }: { isLoggedIn: boolean }) {
  if (isLoggedIn) {
    return <h1>Welcome!</h1>;
  } else {
    <h1>Please log in.</h1>;
  }

  return <div>{isLoggedIn ? <h1>Welcome!</h1> : <h1>Please log in.</h1>}</div>;
}

/*  

condition
   ↓
true ─────→ Welcome!
   │
false ────→ Please log in

When should you use ternary?

When you have:    If this → show A, otherwise → show B.

*/

function UserAccount({ isPremium }: { isPremium: boolean }) {
  return <div>{isPremium ? <p>Premium Member</p> : <p>Free Member</p>}</div>;
}

export { User, UserAccount };

/**
 *
 * In TypeScript, the | symbol is called the Union operator.
 *
 * If it is used to create a Union Type, which allows a variable, property, or function parameter to hold more than specific type of value.
 *
 */

// Union of Literal Types: Restricting a variable to a strict set of specific string values
type Status = "cancelled" | "pending" | "delivered";

// function OrderStatus({ status }: { status: "cancelled" | "pending" | "delivered" }) {}

export function OrderStatus({ status }: { status: Status }) {
  if (status === "cancelled") {
    return <p>Order Cancelled</p>;
  }

  return (
    <div>
      {status === "delivered" ? (
        <p>Order Delivered</p>
      ) : (
        <p>Preparing your order...</p>
      )}

      {status === "pending" && <p>Preparing your order...</p>}

      {status === "delivered" && <p>Order Delivered</p>}
    </div>
  );
}

interface User {
  name: string;
  isAdmin: boolean;
  isPremium: boolean;
}

// Combining
export const Dashboard = ({ user }: { user: User }) => {
  // console.log(user);

  if (!user) {
    return <p>Please log in.</p>;
  }

  return (
    <div>
      <h1>Welcome, {user.name}</h1>

      {/* {user.admin && <AdminPanel />} */}
      {user.isAdmin && <h2>Admin Dashboard</h2>}

      <p>{user.isPremium ? "Premium Member" : "Free Member"}</p>
    </div>
  );
};
