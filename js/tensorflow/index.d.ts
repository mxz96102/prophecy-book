export interface IGlobal {
    set: (key: string, value: any) => any;
    get: (key: string) => any;
    end: () => void;
}
export declare function safeEval(code: string, context?: {
    [key: string]: any;
}): Promise<{}>;
