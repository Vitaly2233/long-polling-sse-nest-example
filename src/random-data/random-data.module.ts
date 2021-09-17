import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RandomDataService } from './random-data.service';
import { RandSchema } from './schema/random-data.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'randData', schema: RandSchema }]),
    ],
    providers: [RandomDataService],
    exports: [RandomDataService]
})
export class RandomDataModule {}
