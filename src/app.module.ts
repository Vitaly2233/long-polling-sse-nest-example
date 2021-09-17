import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { LongPollingModule } from './long-polling/long-polling.module';
import { RandomDataModule } from './random-data/random-data.module';
import { SseModule } from './sse/sse.module';

@Module({
    imports: [
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '..', 'client'),
        }),
        MongooseModule.forRoot('mongodb://localhost:27017'),
        LongPollingModule,
        RandomDataModule,
        SseModule,
    ],
})
export class AppModule {}
