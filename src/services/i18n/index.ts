import { DOMParser } from '@xmldom/xmldom';

export async function i18n(
	language: string = 'en'
): Promise<Record<string, string>> {
	const parser = new DOMParser();

	const response = await fetch(
		require(`./translations/values${
			language === 'en' ? '' : '-' + language
		}/strings.xml`)
	);
	const file = await response.text();
	const doc = parser.parseFromString(file, 'text/xml');
	const nodes = Object.values(doc.getElementsByTagName('string'));
	const elements = nodes.filter((node) => node.nodeName == 'string');

	return Object.fromEntries(
		elements.map((element) => {
			const name = element.attributes[0].value;
			const value = element.textContent ?? '';
			return [name, value];
		})
	);
}

export async function getLanguageList(): Promise<Record<string, string>> {
	const response = await fetch(require(`./languages.json`));
	return await response.json();
}
