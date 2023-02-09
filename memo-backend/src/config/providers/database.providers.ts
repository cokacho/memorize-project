import * as process from 'process';
import configs from '../db';
import { Options } from 'sequelize';
import { SequelizeModule } from '@nestjs/sequelize';

const env = process.env.NODE_ENV || 'development';
const dbConfig = (configs as { [key: string]: Options })[env];
export const databaseProviders = SequelizeModule.forRoot({
  ...dbConfig,
  autoLoadModels: true,
  synchronize: true,
  define: {
    underscored: true,
  },
});
