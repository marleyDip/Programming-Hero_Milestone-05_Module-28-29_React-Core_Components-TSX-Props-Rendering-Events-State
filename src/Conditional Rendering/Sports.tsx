import type { SportType } from "../Types";
import SportCard from "./SportCard";

const sports: SportType[] = [
  { name: "Football", players: 11 },
  { name: "Volleyball", players: 9 },
  { name: "Chess", players: 2 },
];

export default function Sports() {
  return (
    <div>
      {sports.map((sport) => {
        return <SportCard sport={sport} />;

        // return <SportCard name={sport.name} players={sport.players} />;
      })}
    </div>
  );
}
