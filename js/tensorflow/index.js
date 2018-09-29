"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tensorflow = require("@tensorflow/tfjs");
/**
 * Provide global context for basic use
 * @param resolve
 * @returns {}
 */
function globalGenerator(resolve, context) {
    var data = {};
    return {
        set: function (key, value) { return (data[key] = value); },
        get: function (key) { return data[key] || context[key]; },
        end: function () { return resolve(data); }
    };
}
function safeEval(code, context) {
    return new Promise(function (resolve) {
        var global = globalGenerator(resolve, context);
        var get = global.get, set = global.set, end = global.end;
        var window = {};
        var tf = tensorflow;
        try {
            eval(code);
        }
        catch (e) {
            resolve("error: " + e);
        }
    });
}
exports.safeEval = safeEval;
//# sourceMappingURL=index.js.map