import Game_ from './Game';

export { default as BaseActor } from './actors/BaseActor';
export { default as Battleship } from './actors/Battleship';
export { default as Carrier } from './actors/Carrier';
export { default as Cruiser } from './actors/Cruiser';
export { default as Destroyer } from './actors/Destroyer';
export { default as Submarine } from './actors/Submarine';
export { default as Scoreboard } from './Scoreboard';

const Game = Game_;

export default Game;
