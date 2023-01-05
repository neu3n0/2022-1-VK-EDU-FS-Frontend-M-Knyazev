var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "axios", "./keys"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.detectLanguage = void 0;
    const axios_1 = __importDefault(require("axios"));
    const keys_1 = require("./keys");
    function detectLanguage(text) {
        return __awaiter(this, void 0, void 0, function* () {
            const head = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + keys_1.IAM_token,
                }
            };
            const bodyParameters = {
                text: text,
                folderId: keys_1.folderId,
                languageCodeHints: [
                    "en", "ru"
                ],
            };
            const data = yield axios_1.default.post('https://translate.api.cloud.yandex.net/translate/v2/detect', bodyParameters, head);
            // console.log(data.data.languageCode);
            return data.data.languageCode;
        });
    }
    exports.detectLanguage = detectLanguage;
    detectLanguage('hello');
});
