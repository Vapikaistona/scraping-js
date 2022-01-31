"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.pages = void 0;
const fs_1 = __importDefault(require("fs"));
const newFile_1 = require("./templates/newFile");
const puppeteer_1 = __importDefault(require("puppeteer"));
var pages;
(function (pages) {
    function write() {
        return __awaiter(this, void 0, void 0, function* () {
            const allPages = yield this.get();
            for (const region of allPages) {
                const dirPath = `${__dirname}/../pages/${region.region}`;
                if (!fs_1.default.existsSync(dirPath)) {
                    fs_1.default.mkdirSync(dirPath);
                }
                for (const web of region.webs) {
                    const filePath = `${dirPath}/${web.name}.js`;
                    if (!fs_1.default.existsSync(filePath)) {
                        const newTemplate = new newFile_1.templates.PageTemplate(web).template;
                        fs_1.default.writeFileSync(filePath, newTemplate);
                    }
                }
            }
        });
    }
    pages.write = write;
    ;
    function get() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const url = 'https://www.alexotos.com/keyboard-vendor-list/';
                const browser = yield puppeteer_1.default.launch();
                const page = yield browser.newPage();
                yield page.goto(url);
                const allPages = yield page.evaluate(() => {
                    console.log(document.title);
                    const columns = document.querySelectorAll('section[data-id=e69f1cf] > div > div');
                    const data = [];
                    for (const column of columns) {
                        let dataColumn = [...column.querySelectorAll('div .elementor-element')].map(region => {
                            const content = region.querySelectorAll('div.elementor-widget-container p');
                            const regionName = content[0].textContent.toLowerCase().replace('/', ' ').replace(':', '').split(' ').join('_');
                            const webs = [...content[1].querySelectorAll('a')].map(web => {
                                const url = new URL(web.href).origin;
                                return { url, name: web.text.toLowerCase().replace('/', ' ').split(' ').join('_') };
                            });
                            return { region: regionName, webs };
                        });
                        data.push(...dataColumn);
                    }
                    return data;
                });
                yield browser.close();
                return allPages;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    pages.get = get;
    ;
    function getDetails(url) {
        return __awaiter(this, void 0, void 0, function* () {
            const browser = yield puppeteer_1.default.launch();
            const page = yield browser.newPage();
            yield page.goto(url);
            const info = yield page.evaluate(() => {
                let icons = [];
                icons = [...document.querySelectorAll('link[rel="apple-touch-icon"]')].map((link) => link.href);
                if (icons.length === 0) {
                    icons = [...document.querySelectorAll('link[rel="shortcut icon"]')].map((link) => link.href);
                }
                return icons;
            });
            yield browser.close();
            return info;
        });
    }
    pages.getDetails = getDetails;
    ;
})(pages = exports.pages || (exports.pages = {}));
//# sourceMappingURL=PagesInfo.js.map