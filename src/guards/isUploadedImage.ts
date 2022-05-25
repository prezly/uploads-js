import { isPlainObject } from 'is-plain-object';
import { isUploadedFile } from './isUploadedFile';
import type { UploadedImage } from '../types';

function isNonEmptyString(value: unknown): boolean {
    return typeof value === 'string' && value.length > 0;
}

export function isUploadedImage(
    file: Record<string, any> | undefined | null,
): file is UploadedImage {
    return (
        typeof file === 'object' &&
        isPlainObject(file) &&
        typeof file?.original_height === 'number' &&
        typeof file.original_width === 'number' &&
        file.original_height > 0 &&
        file.original_width > 0 &&
        Array.isArray(file.effects) &&
        file.effects.every(isNonEmptyString) &&
        isUploadedFile(file)
    );
}
