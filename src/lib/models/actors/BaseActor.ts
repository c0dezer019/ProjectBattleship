import type { iActor, Angle, Type, Health, Speed } from '../../utils/types';

class BaseActor implements iActor {
	private _type: Type;
	private _hp: Health;
	private _speed: Speed;
	private _direction: Angle;

	constructor(type: Type, hp: Health, speed: Speed, direction: Angle = 0) {
		this._hp = hp;
		this._type = type;
		this._direction = direction;
		this._speed = speed;
	}

	public get direction(): Angle {
		return this._direction;
	}

	public get type(): Type {
		return this._type;
	}

	public get hp(): Health {
		return this._hp;
	}

	public get speed(): Speed {
		return this._speed;
	}

	protected set direction(direction: Angle) {
		this._direction = direction;
	}

	protected set type(newType: Type) {
		this._type = newType;
	}

	protected set hp(newHealthVal: Health) {
		this._hp = newHealthVal;
	}

	protected set speed(newSpeed: Speed) {
		this._speed = newSpeed;
	}
}

export default BaseActor;
