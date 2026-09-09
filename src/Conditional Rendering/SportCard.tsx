import type { SportType } from "../Types";

export default function SportCard({ sport }: { sport: SportType }) {
  return (
    <div className="sport">
      {/* <h5>Name: {name}</h5>
      <p>Players: {players}</p> */}

      <h5>Name: {sport.name}</h5>
      <p>Players: {sport.players}</p>
    </div>
  );
}

/* export default function SportCard({
  name,
  players,
}: {
  name: string;
  players: number;
}) {
  return (
    <div className="sport">
      <h5>Name: {name}</h5>
      <p>Players: {players}</p>
    </div>
  );
} */
