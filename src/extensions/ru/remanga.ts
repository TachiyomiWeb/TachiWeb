// import ExtensionObject from '../../typings/ExtensionObject';
import SManga from '../../typings/SManga';
import axios from 'axios';
import proxify_url from '../../utils/proxify_url';

export const name = 'Remanga';
export const id = 8983242087533137528;
export const lang = 'ru';
export const baseOriginal = 'https://api.remanga.org';
export const headers = {
	'User-Agent':
		'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36 Edg/100.0.2',
	Accept:
		'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/jxl,image/webp,*/*;q=0.8',
	Referer: 'https://remanga.org',
};
export async function popularManga(page?: number) {
	const response = await axios.get<Record<string, any[]>>(
		location.hostname === 'localhost' ? 'http://localhost:9001/index.php' : 'https://proxy.aiving.tk/index.php',
		{
			params: {
				q: proxify_url(
					`${baseOriginal}/api/search/catalog/?ordering=-rating&count=50&page=` + page ?? 1
				),
			},
		}
	);
	const mangas: SManga[] = response.data.content.map(
		(manga: {
			rus_name: string;
			dir: string;
			img: { high?: string; mid?: string; low: string };
		}) => ({
			title: manga.rus_name, // else en_name
			url: `/api/titles/${manga.dir}/`,
			thumbnail_url:
				manga.img.high !== undefined
					? baseOriginal + manga.img.high
					: manga.img.mid !== undefined
					? baseOriginal + manga.img.mid
					: baseOriginal + manga.img.low,
		})
	);

	return mangas;
}
