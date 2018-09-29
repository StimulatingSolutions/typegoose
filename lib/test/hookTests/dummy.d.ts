import * as mongoose from 'mongoose';
import { Typegoose } from '../../typegoose';
export declare class Dummy extends Typegoose {
    text: string;
}
export declare const model: mongoose.Model<import("../../../../../../../../Users/joe/work/stimulating-solutions/typegoose/src/typegoose").InstanceType<Dummy>> & Dummy & typeof Dummy;
