import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as Path from 'path';
const pg = require('pg')

@Injectable()
export class ConfigService {
  public async getDBConfig(): Promise<TypeOrmModuleOptions> {
    const path = Path.join(__dirname, '..', '/**/*.entity.js');
    return {
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [path],
      keepConnectionAlive: true,
    };
  }
}