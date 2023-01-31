import {Module} from '@nestjs/common';
import {GameModule} from './game/game.module';
import {databaseProviders} from "./config/providers/database.providers";

@Module({
  imports: [
    databaseProviders,
    GameModule,
  ],
  controllers: []
})
export class AppModule {
}
