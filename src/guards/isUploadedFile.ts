import type { UploadedFile } from '../types';
import { isObject } from './isObject';

export function isUploadedFile(file: unknown): file is UploadedFile {
    return (
        isObject(file) &&
        typeof file.uuid === 'string' &&
        typeof file.version === 'number' &&
        typeof file.size === 'number' &&
        typeof file.mime_type === 'string' &&
        typeof file.filename === 'string' &&
        file.version > 0 &&
        file.uuid.length > 0 &&
        file.size > 0 &&
        file.mime_type.length > 0 &&
        file.filename.length > 0
    );
}
