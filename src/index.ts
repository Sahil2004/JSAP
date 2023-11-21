import { Target, IAnimatableProperties } from "./types";
import {
	easeInitializer,
	targetInitializer,
	toFromInitializer,
} from "./initializers";

interface ITween {
	target: Target;
	duration: number;
	to: IAnimatableProperties;
	from?: IAnimatableProperties;
	ease?: string;
	fill?: "forwards" | "backwards" | "both" | "none";
	iteration?: number;
	onComplete?: () => void;
}

class tween {
	target: HTMLElement[];
	duration: number;
	to: IAnimatableProperties;
	from: IAnimatableProperties | null;
	ease: string;
	fill: "forwards" | "backwards" | "both" | "none";
	iteration: number;
	onFinish: () => void;
	animation: Animation[];

	constructor({
		target,
		duration,
		to,
		from,
		ease,
		fill,
		iteration,
		onComplete,
	}: ITween) {
		this.animation = [];
		this.duration = duration;
		this.target = targetInitializer(target);
		const toFrom = toFromInitializer(to, from);
		this.to = toFrom.to;
		this.from = toFrom.from;
		this.iteration = iteration ?? 1;
		this.onFinish = onComplete ?? (() => {});
		this.ease = ease ? easeInitializer(ease) : "linear";
		this.fill = fill ?? "none";
		this.target.forEach((el) => {
			let animation = el.animate([{ ...this.from }, { ...this.to }], {
				duration: this.duration,
				iterations: this.iteration,
				easing: this.ease,
				fill: this.fill,
			});
			this.animation.push(animation);
			animation.onfinish = this.onFinish;
		});
	}

	/**
	 * Play the animation
	 * @params void
	 * @returns void
	 */
	play() {
		this.animation.forEach((anim) => {
			anim.play();
		});
	}

	/**
	 * Pause the animation
	 * @params void
	 * @returns void
	 */
	pause() {
		this.animation.forEach((anim) => {
			anim.pause();
		});
	}

	/**
	 * Reverses the animation
	 * @params void
	 * @returns void
	 */
	reverse() {
		this.animation.forEach((anim) => {
			anim.reverse();
		});
	}

	/**
	 * Kill the animation entirely
	 * @params void
	 * @returns void
	 */
	kill() {
		this.animation.forEach((anim) => {
			anim.cancel();
		});
	}

	/**
	 * Set or change the number of iterations
	 * @param iteration The number of iterations that should be followed
	 * @returns void
	 */
	setIteration(iteration: number) {
		this.iteration = iteration;
	}
}

export { tween };
