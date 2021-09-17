import { Controller, MessageEvent, Req, Sse } from '@nestjs/common';
import { interval, map, Observable, Observer } from 'rxjs';
import { RandomDataService } from 'src/random-data/random-data.service';
import { SseService } from './sse.service';
import * as _ from 'lodash';
import { RandDocument } from 'src/random-data/schema/random-data.schema';

@Controller('sse')
export class SseController {
    constructor(
        private sesService: SseService,
        private RandomDataService: RandomDataService,
    ) {}

    @Sse()
    sse(@Req() req): Observable<MessageEvent> {
        console.log(req.cookies);
        return new Observable<MessageEvent>((observer) => {
            if (req.cookies.name === 'some') observer.unsubscribe();

            let previousData: RandDocument[];

            const interval = setInterval(() => {
                this.RandomDataService.getAllData().then((data) => {
                    if (_.isEqual(data, previousData)) return;

                    observer.next({ data });
                    previousData = data;
                });
            }, 2000);
            return () => clearInterval(interval);
        });
    }
}
