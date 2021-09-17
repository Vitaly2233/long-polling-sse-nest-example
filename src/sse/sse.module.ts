import { Module } from '@nestjs/common';
import { SseService } from './sse.service';
import { SseController } from './sse.controller';
import { RandomDataModule } from 'src/random-data/random-data.module';

@Module({
  imports: [RandomDataModule],
  providers: [SseService],
  controllers: [SseController]
})
export class SseModule {}
