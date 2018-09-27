import SegmentModel, { SegmentModelLike } from '../model/SegmentModel';
export default class ViewStore {
    segments: Array<SegmentModel>;
    data: any;
    date: Date;
    title: string;
    selectId: string;
    readonly selectedSeg: SegmentModel;
    setTitle(title: string): void;
    updateData(data: Object): void;
    setSelect(id: string): void;
    newSeg(type: string, data: any, content: string): void;
    deleteSeg(id: string): void;
    insertSeg({ type, data, content, id }: {
        type: string;
        data: any;
        content: string;
        id: string;
    }): void;
    deleteSelectSeg(): void;
    runNowCode(): void;
    fromJS(obj: ViewStoreLike): void;
    toJS(): {
        segments: {
            type: string;
            data: any;
            content: string;
            id: string;
        }[];
        title: string;
        date: number;
        data: any;
    };
}
interface ViewStoreLike {
    segments: Array<SegmentModelLike>;
    title: string;
    date: number;
    data: any;
}
export {};
