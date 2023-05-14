import exp from "constants";

interface NewPlayer {
  firstname: string;
  lastname: string;
  level: number;
}

export const playerPool: NewPlayer[] = [];

const addPlayer = function (
  firstname: string,
  lastname: string,
  level: number
): void {
  const player: NewPlayer = { firstname, lastname, level };
  playerPool.push(player);
};

addPlayer("Jane", "Tran", 5);
console.log(playerPool);
