import { Body, Controller, Get, Post } from '@nestjs/common';
import { LongPollingService } from './long-polling.service';

@Controller('long-polling')
export class LongPollingController {
    constructor(private longPollingService: LongPollingService) {}

    @Get()
    getData() {
        return this.longPollingService.getData()
    }

    @Post()
    setData(@Body() body) {
        this.longPollingService.setData(body);
        return true;
    }
}
