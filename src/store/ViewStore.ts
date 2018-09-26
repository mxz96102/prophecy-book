import {observable, computed, reaction, action} from 'mobx';
import SegmentModel from '../model/SegmentModel'

export default class ViewStore {
    @observable segments:Array<SegmentModel> = [];

    @observable data = {};

    @observable title = "Untitled Book";

    @observable selectId = "title";

    @action setTitle(title) {
        this.title = title;
    }

    @action updateData(data) {
        this.data = {...this.data, ...data}
    }

    @action setSelect(id) {
        this.selectId = id;
    }

    @action newSeg(type, data, content) {
        this.segments.push(new SegmentModel(type, data, content))
    }

    @action deleteSeg(id: string) {
        this.segments = this.segments.filter(seg => seg.id !== id)
    }

    @action insertSeg({type, data, content, id}) {
        this.segments.push(new SegmentModel(type, data, content, id))
    }

    @action fromJS(obj) {
        this.segments = this.segments.slice(0);
        obj.segments.map(segment => this.insertSeg(segment));
    }

}