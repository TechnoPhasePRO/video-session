import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { VideosService } from './videos.service';
import { CreateVideoDto, UpdateVideoDto } from '../dto/video.dto';
import { Video } from './video.model';

@Controller('videos')
export class VideosController {
  constructor(private readonly videosService: VideosService) {}

  @Post()
  async create(@Body() createVideoDto: CreateVideoDto): Promise<Video> {
    return this.videosService.create(createVideoDto);
  }

  @Get()
  async findAll(): Promise<Video[]> {
    return this.videosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Video> {
    return this.videosService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateVideoDto: UpdateVideoDto): Promise<Video> {
    return this.videosService.update(id, updateVideoDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<{ message: string }> {
    const { deleted } = await this.videosService.remove(id);
    if (deleted) {
      return { message: `Video id: ${id} is deleted.` };
    } else {
      return { message: `Video id ${id} not found.` };
    }
  }
}
