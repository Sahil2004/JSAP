export type Target = HTMLElement | string | Array<HTMLElement | string>;

export interface IAnimatableProperties {
	[key: string]: string | number | undefined;
	scale?: number;
	transform?: string;
	color?: string;
	backgroundColor?: string;
	rotate?: number; // deg
	translateX?: number; // px
}

export interface IRealAnimatableProperties {
	[key: string]: string | number | undefined;
	scale?: number;
	transform?: string;
	color?: string;
	backgroundColor?: string;
}
