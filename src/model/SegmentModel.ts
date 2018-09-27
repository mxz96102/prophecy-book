import {observable, action} from 'mobx';
import {randomHash} from '../util.ts';

export default class SegmentModel {
    type;
    id;
    @observable data;
    @observable content;

    constructor(type, data, content, id?) {
        this.type = type;
        this.data = data;
        this.content = content;
        this.id = id || randomHash();
    }

    @action setContent(content) {
        this.content = content;
    }

    @action setData(data) {
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

    static fromJS(obj) {
        return new SegmentModel(obj.type, obj.data, obj.content, obj.id);
    }
}