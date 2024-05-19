import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Video } from '../videos/video.model';

@Schema()
export class Session extends Document {
  @Prop({ type: Types.ObjectId, ref: 'Video', required: true })
  videoId: Video;

  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  timestamp: Date;
}

export const SessionSchema = SchemaFactory.createForClass(Session);
  