import { IAnimatableProperties, IRealAnimatableProperties } from "../types";

export const toFromInitializer = (
	to: IAnimatableProperties,
	from: IAnimatableProperties | undefined
) => {
	to = animatablePropertyFormatter(to);
	if (from) {
		from = animatablePropertyFormatter(from);
		return { to, from };
	} else {
		return { to, from: null };
	}
};

export const animatablePropertyFormatter = (
	properties: IAnimatableProperties
) => {
	let newProperties: IRealAnimatableProperties = {};
	for (let property in properties) {
		// Transform properties to real css properties
		if (property.includes("translate")) {
			if (!newProperties.transform) newProperties.transform = "";
			newProperties.transform += `${property}(${properties[property]}px) `;
		} else if (property === "rotate") {
			newProperties.transform += `${property}(${properties[property]}deg) `;
		} else {
			newProperties[property] = properties[property];
		}
	}
	return newProperties;
};
