import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Session } from './session.model';
import { CreateSessionDto, UpdateSessionDto } from '../dto/session.dto';

@Injectable()
export class SessionsService {
  constructor(@InjectModel(Session.name) private readonly sessionModel: Model<Session>) {}

  async create(createSessionDto: CreateSessionDto): Promise<Session> {
    const createdSession = new this.sessionModel(createSessionDto);
    return createdSession.save();
  }

  async findAll(): Promise<Session[]> {
    return this.sessionModel.find().exec();
  }

  async findOne(id: string): Promise<Session> {
    return this.sessionModel.findById(id).exec();
  }

  async update(id: string, updateSessionDto: UpdateSessionDto): Promise<Session> {
    return this.sessionModel.findByIdAndUpdate(id, updateSessionDto, { new: true }).exec();
  }

  async remove(id: string): Promise<{ deleted: boolean }> {
    const result = await this.sessionModel.findOneAndDelete({ _id: id }).exec();
    return { deleted: !!result };
  }
}
