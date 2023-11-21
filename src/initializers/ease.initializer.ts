const EASE: { [key: string]: { [key: string]: string } } = {
	bounce: {
		out: "cubic-bezier(0.17, 0.8, 0.3, 1.35)",
	},
};

export const easeInitializer = (ease: string): string => {
	if (
		["linear", "ease", "ease-in", "ease-out", "ease-in-out"].includes(
			ease
		) ||
		ease.includes("cubic-bezier") ||
		ease.includes("steps")
	) {
		return ease;
	} else {
		const easeType = ease.split(".");
		return EASE[easeType[0].toLowerCase()][easeType[1].toLowerCase()];
	}
};
