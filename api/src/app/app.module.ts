import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

import { ConfigModule } from '@nestjs/config';

import { ConfigModuleApp } from './config/config.module'
import { ConfigService } from './config/config.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModuleApp,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: async (
        configService: ConfigService,
      ): Promise<TypeOrmModuleOptions> => configService.getDBConfig(),
      inject: [ConfigService],
    }),
    UserModule,
  ],
  controllers: [],
  providers: [ConfigService],
})
export class AppModule {}
