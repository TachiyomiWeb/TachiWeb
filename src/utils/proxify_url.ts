const ord = (str: string) => str.charCodeAt(0);
const chr = (code: number) => String.fromCharCode(code);

function encrypt_url(str: string, key: string, decrypt = false) {
	return new Array(str.length)
		.fill(' ')
		.map((_, i) => {
			const ascii = decrypt
				? ord(str[i]) - ord(key[i % key.length])
				: ord(str[i]) + ord(key[i % key.length]);

			return chr(ascii);
		})
		.join('');
}

const encode = (input: string) =>
	btoa(input).replaceAll('+', '-').replaceAll('+/', '-_').replace('=', '');

export default function proxify_url(url: string) {
	return encode(encrypt_url(url, 'd74238002d409db6252cdf38d372ebd5'));
}
