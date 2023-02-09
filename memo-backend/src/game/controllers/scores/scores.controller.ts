import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateScoreDto } from '../../dto/create-score.dto';
import { Score } from '../../models/score/score';
import { ScoresService } from '../../services/scores/scores.service';

@Controller('scores')
export class ScoresController {
  constructor(private readonly service: ScoresService) {}

  @Post()
  create(@Body() createScoreDto: CreateScoreDto): Promise<Score> {
    return this.service.create(createScoreDto);
  }

  @Get()
  findAll(): Promise<Score[]> {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Score> {
    return this.service.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.service.remove(id);
  }
}
