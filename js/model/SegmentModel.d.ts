export default class SegmentModel {
    type: string;
    id: string;
    data: any;
    content: string;
    constructor(type: string, data: any, content: string, id?: string);
    setContent(content: string): void;
    setData(data: any): void;
    toJS(): {
        type: string;
        data: any;
        content: string;
        id: string;
    };
    static fromJS(obj: {
        type: string;
        data: any;
        content: string;
        id: string;
    }): SegmentModel;
}
export interface SegmentModelLike {
    type: string;
    data: any;
    content: string;
    id: string;
}
