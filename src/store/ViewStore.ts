import { observable, computed, reaction, action, toJS } from 'mobx';
import SegmentModel, { SegmentModelLike } from '../model/SegmentModel'
import { safeEval } from '../tensorflow';

export default class ViewStore {
    @observable segments: Array<SegmentModel> = [];

    @observable data: any = {};

    @observable date = new Date();

    @observable title = "Untitled Book";

    @observable selectId = "title";

    @computed get selectedSeg() {
        return this.segments.find(seg => seg.id === this.selectId)
    }

    @action setTitle(title: string) {
        this.title = title;
    }

    @action updateData(data: Object) {
        this.data = { ...this.data, ...data }
    }

    @action resetData() {
        this.data = {}
    }

    @action setSelect(id: string) {
        this.selectId = id;
    }

    @action newSeg(type: string, data: any, content: string) {
        this.segments.push(new SegmentModel(type, data, content))
    }

    @action deleteSeg(id: string) {
        this.segments = this.segments.filter(seg => seg.id !== id)
    }

    @action insertSeg({ type, data, content, id }: { type: string, data: any, content: string, id: string }) {
        this.segments.push(new SegmentModel(type, data, content, id))
    }

    @action deleteSelectSeg() {
        if (this.selectId !== "title")
            this.deleteSeg(this.selectId);
    }

    @action readJson(file: File) {
        const reader = new FileReader();

        reader.onloadend = () => {
            let data;

            try {
                data = JSON.parse(reader.result.toString())
            } catch (e) {

            }

            if (data) {
                this.fromJS(data)
            }
        }

        reader.readAsText(file)
    }

    @action saveToFile() {
        const data = JSON.stringify(this.toJS());
        const element = document.createElement('a');
        const filename = this.title + '.json';
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(data));
        element.setAttribute('download', filename);

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }

    @action async runCode(seg: SegmentModel) {
        const { content = "" } = seg;

        seg.setData("正在运行中，请稍后");
        let res = await safeEval(content, this.data);

        seg.setData(res);
        this.updateData(res);
    }

    @action runNowCode() {
        const seg = this.selectedSeg;
        if (seg) {
            this.runCode(seg);
        }
    }

    @action async runAllCode() {
        this.resetData();

        for (const segment of this.segments.filter(seg => seg.type === "CODE")) {
            await this.runCode(segment);
        }
    }

    @action fromJS(obj: ViewStoreLike) {
        this.segments = [];
        obj.segments.map(segment => this.insertSeg(segment));
        this.title = obj.title;
        this.date = new Date(obj.date);
    }

    @action toJS() {
        return {
            segments: this.segments.map(seg => seg.toJS()),
            title: this.title,
            date: +this.date,
            data: this.data
        }
    }
}

interface ViewStoreLike {
    segments: Array<SegmentModelLike>,
    title: string,
    date: number,
    data: any
}