import type { ProfileType } from "../Types";

export const UserCard = ({ user }: { user: ProfileType }) => {
  return (
    <div className="m-5 p-6 border border-indigo-500 rounded-xl shadow-xl">
      <h2 className="pb-2.5 border-b border-dashed border-b-lime-300">
        {user.name}
      </h2>

      {(user.role === "Admin" || user.role === "Moderator") && (
        <p className="py-2">👑 {user.role}</p>
      )}

      {/* {user.role === "Admin" && <p>👑 Admin</p>}
      {user.role === "Moderator" && <p>👑 Moderator</p>}
      <p>👑 {user.role}</p> 
      
      {user.role === "Admin" || user.role === "Moderator" ? (
        <p>👑 {user.role}</p>
      ) : (
        <p>{user.role}</p>
      )} */}

      {user.isPremium && (
        <p className="bg-[#fff7d6] py-1.5 text-amber-700 text-sm font-semibold rounded-4xl">
          ⭐ Premium
        </p>
      )}

      {user.isActive ? (
        <p className="text-green-300 py-2">🟢 Active</p>
      ) : (
        <p className="text-red-300 py-2">🔴 Offline</p>
      )}

      <p className="pt-2.5 border-t border-t-lime-300 border-dashed">
        {user.role} is currently {user.isActive ? "online" : "offline"}
      </p>
    </div>
  );
};

export const UserCard1 = ({
  user,
  totalUser,
  activeUser,
  premiumUser,
}: {
  user: ProfileType;
  totalUser: number;
  activeUser: number;
  premiumUser: number;
}) => {
  //   if (user.role === "Admin") {
  //     if (user.isActive) {
  //       return <p>Admin is currently online</p>;
  //     } else {
  //       return <p>Admin is currently offline</p>;
  //     }
  //   } else if (user.role === "User") {
  //     if (user.isActive) {
  //       return <p>User is currently online</p>;
  //     } else {
  //       return <p>user is currently offline</p>;
  //     }
  //   }

  return (
    <div>
      <p>Total User: {totalUser}</p>
      <p>Total User: {activeUser}</p>
      <p>Total User: {premiumUser}</p>
      <h2>{user.name}</h2>
      <p>{user.role}</p>
      <p>{user.isActive ? "Online" : "Offline"}</p>
      <p>{user.isPremium && "Premium"}</p>
      <p>
        {/* {user.role === "Admin" && user.isActive === true
          ? "Admin is currently online"
          : "Admin is currently offline"} */}
      </p>
    </div>
  );
};

/*  
Is Admin?
   ↓
Is Active?
   ↓
Which message?



Admin + Active
      ↓
"Admin is currently online"

Admin + Offline
      ↓
"Admin is currently offline"

User + Active
      ↓
"User is currently online"

User + Offline
      ↓
"User is currently offline"

*/
