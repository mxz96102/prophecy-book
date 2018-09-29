const tensorflow = import('@tensorflow/tfjs');

export interface IGlobal {
    // set global data
    set: (key: string, value: any) => any;
    // get global data
    get: (key: string) => any;
    end: () => void;
}

/**
 * Provide global context for basic use
 * @param resolve 
 * @returns {}
 */
function globalGenerator(resolve: (value: ({}) | PromiseLike<{}>) => void, context?: { [key: string]: any }) {
    const data: { [key: string]: any } = {};

    return {
        set: (key: string, value: any) => (data[key] = value),
        get: (key: string) => data[key] || context[key],
        end: () => resolve(data)
    }
}

export function safeEval(code: string, context?: { [key: string]: any }) {
    return new Promise(resolve => {
        const global = globalGenerator(resolve, context);
        const { get, set, end } = global;
        const window = {};
        tensorflow.then(tf => {
            try {
                eval(code);
            } catch (e) {
                resolve(`error: ${e}`);
            }
        })
    })
}