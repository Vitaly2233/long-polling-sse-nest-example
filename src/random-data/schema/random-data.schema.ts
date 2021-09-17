import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RandDocument = Rand & Document;

@Schema({ strict: false })
export class Rand {}

export const RandSchema = SchemaFactory.createForClass(Rand);
