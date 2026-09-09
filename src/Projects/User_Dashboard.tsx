import type { ProfileType } from "../Types";
import { UserCard } from "./UserCard";

const users: ProfileType[] = [
  {
    id: 1,
    name: "Sufian",
    role: "Admin",
    isActive: true,
    isPremium: true,
  },
  {
    id: 2,
    name: "Rahim",
    role: "User",
    isActive: false,
    isPremium: false,
  },
  {
    id: 3,
    name: "Karim",
    role: "User",
    isActive: true,
    isPremium: true,
  },
  {
    id: 4,
    name: "Hasan",
    role: "Moderator",
    isActive: true,
    isPremium: false,
  },
];

export const UserList = () => {
  const totalUser: number = users.length;
  // console.log(totalUser);

  const activeUsers = users.filter((user) => user.isActive).length;
  // console.log(activeUser);

  const premiumUsers = users.filter((user) => user.isPremium).length;
  // console.log(premiumUser);

  return (
    <div>
      <h1 className="pb-10 pt-2 border-b-2 border-dotted border-b-cyan-500 text-cyan-500!">
        USER <span className="text-orange-400">DASHBOARD</span>
      </h1>

      <div className="m-5 p-5 text-lg border-2 border-amber-500 border-dashed grid grid-cols-3 gap-5">
        <p>
          Total Users: <strong>{totalUser}</strong>
          {/* Total Users: <strong>{users.length}</strong> */}
        </p>

        <p>
          Active Users: <strong>{activeUsers}</strong>
        </p>

        <p>
          Premium Users: <strong>{premiumUsers}</strong>
        </p>
      </div>

      <div className="grid grid-cols-2">
        {users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            /* totalUser={totalUsers}
          activeUser={activeUsers}
          premiumUser={premiumUsers} */
          />
        ))}
      </div>
    </div>
  );
};

/*  
                 App
                  │
                  │ props
                  ↓
              UserList
                  │
                 map()
                  │
       ┌──────────┼──────────┐
       ↓          ↓          ↓
    UserCard   UserCard   UserCard
       │          │          │
      props      props      props
       │          │          │
       └──────────┼──────────┘
                  ↓
        Conditional Rendering
                  ↓
                  UI

*/
