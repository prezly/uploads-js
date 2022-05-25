import { isUploadedFile } from './isUploadedFile';
import type { UploadedImage } from '../types';
import { isObject } from './isObject';

function isNonEmptyString(value: unknown): boolean {
    return typeof value === 'string' && value.length > 0;
}

export function isUploadedImage(file: unknown): file is UploadedImage {
    return (
        isObject(file) &&
        isUploadedFile(file) &&
        typeof file.original_height === 'number' &&
        typeof file.original_width === 'number' &&
        file.original_height > 0 &&
        file.original_width > 0 &&
        Array.isArray(file.effects) &&
        file.effects.every(isNonEmptyString)
    );
}
