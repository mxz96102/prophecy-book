import {observable, computed, reaction, action, toJS} from 'mobx';
import SegmentModel from '../model/SegmentModel'
import {safeEval} from '../tensorflow';

export default class ViewStore {
    @observable segments:Array<SegmentModel> = [];

    @observable data = {};

    @observable date = new Date();

    @observable title = "Untitled Book";

    @observable selectId = "title";

    @computed get selectedSeg() {
        return this.segments.find(seg => seg.id === this.selectId) || {}
    }

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

    @action deleteSelectSeg () {
        if (this.selectId !== "title")
            this.deleteSeg(this.selectId);
    }

    @action runNowCode () {
        const seg = this.selectedSeg;
        if (seg) {
            const {content = ""} = seg;

            seg.setData("正在运行中，请稍后");
            safeEval(content, this.data)
            .then((res) => {seg.setData(res), this.updateData(res)});
        }
    }

    @action fromJS(obj) {
        this.segments = this.segments.slice(0);
        obj.segments.map(segment => this.insertSeg(segment));
        this.title = obj.title;
        this.date = new Date(obj.date);
    }

    @action toJS() {
        return {
            segments: this.segments.map(seg => seg.toJS()),
            title: this.title,
            date: +this.date
        }
    }
}