import UserCard from "./UserCard";

interface User {
  name: string;
  isLoggedIn: boolean;
}

const users: User[] = [
  { name: "Deep", isLoggedIn: true },
  { name: "Akand", isLoggedIn: true },
  { name: "Marley", isLoggedIn: false },
  { name: "Sufian", isLoggedIn: true },
  { name: "Rahim", isLoggedIn: false },
];

export default function Users() {
  return (
    <div>
      {users.map((user) => (
        <UserCard name={user.name} />
      ))}
    </div>
  );
}

/* export default function Users() {
  return (
    <div>
      {users.map((user) => (
        <li className="m-1 text-lg">User Name: {user.name}</li>
      ))}
    </div>
  );
} */
