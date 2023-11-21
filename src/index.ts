import { Target } from "./types";
import { targetInitializer } from "./initializers";

interface ITween {
	target: Target;
	to?: object;
	from?: object;
}

class tween {
	target: HTMLElement[];
	constructor({ target, to, from }: ITween) {
		this.target = targetInitializer(target);
	}
}

export { tween };
