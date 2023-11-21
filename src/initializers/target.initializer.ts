import { Target } from "../types";

const targetInitializer = (target: Target): HTMLElement[] => {
	let targets: HTMLElement[] = [];
	if (typeof target === "string") {
		targets = Array.from(document.querySelectorAll(target));
	} else if (Array.isArray(target) && typeof target[0] === "string") {
		for (let query in target) {
			document.querySelectorAll(query).forEach((el) => {
				return targets.push(el as HTMLElement);
			});
		}
	} else if (Array.isArray(target) && typeof target[0] === "object") {
		targets.push(...(target as HTMLElement[]));
	} else {
		targets.push(target as HTMLElement);
	}
	return targets;
};

export { targetInitializer };
