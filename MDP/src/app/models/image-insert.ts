import { EntityType } from './entity-type';
import { ImageType } from './image-type';

export class ImageInsert {
    targetId!: number;
    targetType!: EntityType;
    content!: string;
    type!: ImageType;
}