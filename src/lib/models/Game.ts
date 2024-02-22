import type { UUID } from 'crypto';
import { GAMEID } from '../utils';

import { iGame } from '../utils/types';
import { Scoreboard } from '.';

class Game implements iGame {
   private ID: UUID = GAMEID;
   private _gameOver: boolean;
   private _scoreboard: Scoreboard;

   constructor() {
      this._gameOver = true;
      this._scoreboard = new Scoreboard();
   }

   public get gameOver() {
      return this._gameOver;
   }

   public get scoreboard() {
      return this._scoreboard;
   }

   protected set gameOver(newStatus: boolean) {
      this._gameOver = newStatus;
   }

   private isGameOver() {
      switch (this._scoreboard) {
         
      }
   }

}

export default Game;
