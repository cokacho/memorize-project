import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Score} from "../../models/score/score";
import {CreateScoreDto} from "../../dto/create-score.dto";

@Injectable()
export class ScoresService {
  constructor(
    @InjectModel(Score)
    private readonly scoreModel: typeof Score,
  ) {
  }

  create(createScoreDto: CreateScoreDto): Promise<Score> {
    const body = JSON.stringify(createScoreDto);

    return this.scoreModel.create(JSON.parse(body));
  }

  async findAll(): Promise<Score[]> {
    return this.scoreModel.findAll();
  }

  findOne(id: string): Promise<Score> {
    return this.scoreModel.findOne({
      where: {
        id,
      },
    });
  }

  async remove(id: string): Promise<void> {
    const Score = await this.findOne(id);
    await Score.destroy();
  }
}
