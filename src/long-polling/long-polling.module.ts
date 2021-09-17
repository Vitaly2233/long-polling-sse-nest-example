import { Module } from '@nestjs/common';
import { LongPollingService } from './long-polling.service';
import { LongPollingController } from './long-polling.controller';
import { RandomDataModule } from 'src/random-data/random-data.module';

@Module({
  imports: [RandomDataModule], 
  providers: [LongPollingService],
  controllers: [LongPollingController]
})
export class LongPollingModule {}
