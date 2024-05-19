import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Video } from './video.model';
import { CreateVideoDto, UpdateVideoDto } from '../dto/video.dto';

@Injectable()
export class VideosService {
  constructor(@InjectModel(Video.name) private readonly videoModel: Model<Video>) {}

  async create(createVideoDto: CreateVideoDto): Promise<Video> {
    const createdVideo = new this.videoModel(createVideoDto);
    return createdVideo.save();
  }

  async findAll(): Promise<Video[]> {
    return this.videoModel.find().exec();
  }

  async findOne(id: string): Promise<Video> {
    return this.videoModel.findById(id).exec();
  }

  async update(id: string, updateVideoDto: UpdateVideoDto): Promise<Video> {
    return this.videoModel.findByIdAndUpdate(id, updateVideoDto, { new: true }).exec();
  }

  async remove(id: string): Promise<{ deleted: boolean }> {
    const result = await this.videoModel.findOneAndDelete({ _id: id }).exec();
    return { deleted: !!result };
  }
  
}
