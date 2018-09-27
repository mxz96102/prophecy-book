import {observable, action} from 'mobx';
import {randomHash} from '../util';

export default class SegmentModel {
    type: string;
    id: string;
    @observable data: any;
    @observable content: string;

    constructor(type:string, data:any, content:string, id?: string) {
        this.type = type;
        this.data = data;
        this.content = content;
        this.id = id || randomHash();
    }

    @action setContent(content: string) {
        this.content = content;
    }

    @action setData(data: any) {
        this.data = data;
    }

    toJS() {
        return {
            type: this.type,
            data: this.data,
            content: this.content,
            id: this.id
        }
    }

    static fromJS(obj: {type: string, data: any, content: string, id: string}) {
        return new SegmentModel(obj.type, obj.data, obj.content, obj.id);
    }
}

export interface SegmentModelLike {
    type: string,
    data: any,
    content: string,
    id: string
}