import { Injectable } from '@nestjs/common';
import { RandomDataService } from 'src/random-data/random-data.service';

@Injectable()
export class LongPollingService {
    constructor(private randomSataService: RandomDataService) {}

    async getData() {
        return this.randomSataService.getAllData();
    }

    async setData(randomData) {
        await this.randomSataService.save(randomData)
    }
}
