import { ungzip } from 'pako';
import { parse } from 'protobufjs';

export default async function decodeBackup(buffer: Buffer): Promise<any> {
	const file: Uint8Array = ungzip(buffer);
	const tachiyomi = require('./models/tachiyomi.proto');
	const backup = parse(
		await (await fetch(tachiyomi)).text() // @ts-ignore
	).root.Backup.decode(file);

	return backup;
}
