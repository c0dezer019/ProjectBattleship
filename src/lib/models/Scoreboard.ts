import type { UUID } from 'crypto';
import { GAMEID } from '../utils';
import { iScoreboard } from '../utils/types';

class Scoreboard implements iScoreboard {
	private _wins: number;
	private _losses: number;
	private _points: number;

	constructor() {
		this._wins = 0;
		this._losses = 0;
		this._points = 0;
	}

	public get wins() {
		return this._wins;
	}

	public get losses() {
		return this._losses;
	}

	public get points() {
		return this._points;
	}

	public incrementWin(id: UUID) {
      if (id === GAMEID)
         return ++this._wins;
	}

   public incrementLoss(id: UUID) {
      if (id === GAMEID)
		   return ++this._losses;
	}

   public incrementPoints(id: UUID, pointsValue: number) {
      if (id === GAMEID)
		   return (this._points += pointsValue);
	}
}

export default Scoreboard;
