/**
 *
 * Rendering lists with map()
 *
 * The basic idea is: You have an array of data -> map() coverts each item into JSX -> React renders the JSX.
 *
 */

// First, remember map() from JavaScript
const users1: string[] = ["Sufian", "Rahim", "Karim"];

const result = users1.map((user) => {
  return user;
});

console.log(result); // ["Sufian", "Rahim", "Karim"]

// In react, map() doesn't have to return strings. It can return JSX.

// Rendering users with map()
export default function UserList1() {
  return (
    <div>
      {users1.map((user) => (
        <p>{user}</p>
      ))}
    </div>
  );
}

/* 
React will effectively create:
<div>
  <p>Sufian</p>
  <p>Rahim</p>
  <p>Karim</p>
</div



users array
     ↓
   map()
     ↓
each user
     ↓
   JSX
     ↓
React renders the list



Why use map()?

Imagine you have 100 users.

Without map():

<p>Sufian</p>
<p>Rahim</p>
<p>Karim</p>
<p>Hasan</p>
...

You obviously don't want to manually write 100 elements.

Instead:

{users.map((user) => (
  <p>{user}</p>
))}

Now React generates one <p> for every user.
*/

// Real-world users are usually objects
// Normally, users aren't just strings.

import type { UserType } from "../Types";
import { CompleteUserCard } from "./UserCard";

const users: UserType[] = [
  {
    id: 1,
    name: "Sufian",
    age: 25,
    city: "Dhaka",
    isAdmin: true,
  },
  {
    id: 2,
    name: "Rahim",
    age: 24,
    city: "Chittagong",
    isAdmin: false,
  },
  {
    id: 3,
    name: "Karim",
    age: 26,
    city: "Rajshahi",
    isAdmin: true,
  },
];

export function UserList() {
  return (
    <div>
      {users.map((user) => {
        // For related user data, passing the whole object is often convenient.
        return <CompleteUserCard key={user.id} user={user} />;

        // You can pass individual props too
        /* return (
          <CompleteUserCard
            key={user.id}
            name={user.name}
            age={user.age}
            city={user.city}
            isAdmin={user.isAdmin}
          />
        ); */

        // Render user information:
        return (
          <div key={user.id}>
            <h2>{user.name}</h2>
            <p>Age: {user.age}</p>
            <p>City: {user.city}</p>

            {user.isAdmin ? <p>Admin</p> : <p>Regular User</p>}
          </div>
        );
      })}
    </div>
  );
}

// map() with conditional rendering Logical && Operator
{
  users.map(
    (user) => user.isAdmin && <p key={user.id}>{user.name} - Admin </p>,
  );
}
// Sufian - Admin
// Karim - Admin

/* The key prop — VERY important

=> When rendering lists, React needs a way to identify each item.

Here: key={user.id} -> is used to uniquely identify each user.

Think of it like a database primary key.
User
│
├── id: 1 → Sufian
├── id: 2 → Rahim
└── id: 3 → Karim

=> React can use these IDs to understand which list item changed, was added, or was removed.


Why not use the array index?

You might see this:

{users.map((user, index) => (
  <div key={index}>
    {user.name}
  </div>
))}

This works technically, but a stable unique ID is usually better.

Prefer: key={user.id} instead of: key={index}

Especially when the list can be:

        reordered
        inserted into
        deleted from
        dynamically changed


For a static list where items never change order, using the index can sometimes be acceptable.

*/

/*  
             users[]
                │
                ↓
              map()
                │
        ┌───────┼───────┐
        ↓       ↓       ↓
      user1   user2   user3
        │       │       │ props
        ↓       ↓       ↓
    UserCard UserCard UserCard
    
And each UserCard receives its data through props.

*/

/*  
The 4 concepts you've learned now connect together

You started with Props, then Conditional Rendering, and now List Rendering.

They work together like this:

                Parent
                  │
              users data
                  │
                  ↓
                map()
                  │
        ┌─────────┼─────────┐
        ↓         ↓         ↓
     UserCard  UserCard  UserCard
        │         │         │
      props     props     props
        │         │         │
        ↓         ↓         ↓
   conditional rendering
        │
        ↓
       UI

Remember these rules:

   => map() → render multiple items ->> users.map(user => <UserCard />)
   
   => key → uniquely identify each list item ->> key={user.id}
   
   => Props → send data to the child ->> <UserCard user={user} />
   
   => Conditional rendering → decide what to show ->> {user.isAdmin && <AdminBadge />}

*/
