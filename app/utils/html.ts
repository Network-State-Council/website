export const setDataBodyAttribute = (attr: string, value?: string) => {
	if (!document?.body) return;
	document.body.setAttribute(`data-${attr}`, value !== undefined ? `${value}` : '');
};

export const removeDataBodyAttribute = (attr: string) => {
	if (!document?.body) return;
	document.body.removeAttribute(`data-${attr}`);
};
