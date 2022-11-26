import SManga from './SManga';

export default interface ExtensionObject {
	name: string;
	id: number;
	lang: string;
	baseOriginal: string;
	baseMirror?: string;
	headers?: Record<string, string>;
	popularManga?: (page?: number) => Promise<SManga[]>;
	searchManga?: (query: string) => Promise<SManga[]>;
	getChapterList?: (manga: {}) => {};
	getMangaDetails?: (manga: {}) => {};
	preferences?: Record<string, {}>;
	ageList?: string[][];
	typeList?: string[][];
	statusList?: string[][];
	categoryList?: string[][];
	genreList?: string[][];
}
