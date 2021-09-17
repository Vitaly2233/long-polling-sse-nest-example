import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RandDocument } from './schema/random-data.schema';

@Injectable()
export class RandomDataService {
    constructor(@InjectModel('randData') private randModel: Model<RandDocument>) {}

    async save(data) {
        const createdData = new this.randModel(data);
        return await createdData.save();
    }

    async getAllData() {
        return await this.randModel.find({})
    }
}
