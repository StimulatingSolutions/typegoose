import * as mongoose from 'mongoose';
import { Typegoose } from '../../typegoose';
export declare class Hook extends Typegoose {
    material: string;
    shape?: string;
}
export declare const model: mongoose.Model<import("../../../../../../../../Users/joe/work/stimulating-solutions/typegoose/src/typegoose").InstanceType<Hook>> & Hook & typeof Hook;
