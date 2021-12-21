import copyToClipboard from "../src/borrow/copyToClipboard";
import {strictEqual} from "assert";

const jsdom = require("jsdom");
const {JSDOM} = jsdom;

describe('浏览器操作相关', function () {
    describe('复制到剪贴板',  function () {
        const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
        global.document = dom.window.document;
    })
})
