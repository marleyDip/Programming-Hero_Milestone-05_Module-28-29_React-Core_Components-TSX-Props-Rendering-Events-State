import type { UserType } from "../Types";

// export function CompleteUserCard({ name, age, city, isAdmin }: { name: string; age: number; city: string; isAdmin: boolean }) {}

export function CompleteUserCard({ user }: { user: UserType }) {
  return (
    <div className="m-4">
      <h2>{user.name}</h2>
      <p>Age: {user.age}</p>
      <p>City: {user.city}</p>

      {user.isAdmin && <strong>Admin</strong>}
    </div>
  );
}

export default function UserCard({ name }: { name: string }) {
  return (
    <div className="user">
      <h3>Name: {name}</h3>
    </div>
  );
}
