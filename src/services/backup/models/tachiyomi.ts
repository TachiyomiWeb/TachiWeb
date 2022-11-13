export interface BackupCategory {
  name: string;
  order?: number;
  flags?: number;
}

export interface BackupChapter {
  url: string;
  name: string;
  scanlator?: string;
  read?: boolean;
  bookmark?: boolean;
  lastPageRead?: number;
  dateFetch?: number;
  dateUpload?: number;
  chapterNumber?: number;
  sourceOrder?: number;
}

export interface BackupHistory {
  url: string;
  lastRead: number;
}

export interface BackupSource {
  name?: string;
  sourceId: number;
}

export interface BackupTracking {
  syncId: number;
  libraryId: number;
  mediaId?: number;
  trackingUrl?: string;
  title?: string;
  lastChapterRead?: number;
  totalChapters?: number;
  score?: number;
  status?: number;
  startedReadingDate?: number;
  finishedReadingDate?: number;
}

export interface BackupManga {
  source: number;
  url: string;
  title?: string;
  artist?: string;
  author?: string;
  description?: string;
  genre: string[];
  status?: number;
  thumbnailUrl?: string;
  dateAdded?: number;
  viewer?: number;
  chapters: BackupChapter[];
  categories: number[];
  tracking: BackupTracking[];
  favorite?: boolean;
  chapterFlags?: number;
  viewer_flags?: number;
  history: BackupHistory[];
}

export interface Backup {
  backupManga: BackupManga[];
  backupCategories: BackupCategory[];
}
