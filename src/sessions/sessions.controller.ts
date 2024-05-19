import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { SessionsService } from './sessions.service';
import { CreateSessionDto, UpdateSessionDto } from '../dto/session.dto';
import { Session } from './session.model';

@Controller('sessions')
export class SessionsController {
  constructor(private readonly sessionsService: SessionsService) {}

  @Post()
  async create(@Body() createSessionDto: CreateSessionDto): Promise<Session> {
    return this.sessionsService.create(createSessionDto);
  }

  @Get()
  async findAll(): Promise<Session[]> {
    return this.sessionsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Session> {
    return this.sessionsService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateSessionDto: UpdateSessionDto): Promise<Session> {
    return this.sessionsService.update(id, updateSessionDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<{ message: string }> {
    const { deleted } = await this.sessionsService.remove(id);
    if (deleted) {
      return { message: `Session id: ${id} is deleted.` };
    } else {
      return { message: `Session id: ${id} not found.` };
    }
  }
}
