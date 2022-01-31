"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.templates = void 0;
var templates;
(function (templates) {
    class PageTemplate {
        constructor(pageInfo) {
            const pageCapital = pageInfo.name.charAt(0).toUpperCase() + pageInfo.name.slice(1);
            this.template =
                `import * as puppeteer from 'puppeteer';
            export module ${pageInfo.name} {
                export class ${pageCapital} {
                    async getKeyboards(){
                        const url = '${pageInfo.url}';
                        const browser = await puppeteer.launch();
                        const page = await browser.newPage();
                        await page.goto(url);
                        const products = await page.evaluate(() => {
                    
                        });
                        await browser.close();
                        return products;
                    }
                    async getSwitches(){
                        const url = '$$url';
                        const browser = await puppeteer.launch();
                        const page = await browser.newPage();
                        await page.goto(url);
                        const products = await page.evaluate(() => {
                    
                        });
                        await browser.close();
                        return products;
                    }
                    async getOther(){
                        const url = '$$url';
                        const browser = await puppeteer.launch();
                        const page = await browser.newPage();
                        await page.goto(url);
                        const products = await page.evaluate(() => {
                    
                        });
                        await browser.close();
                        return products;
                    }
                }
            }
            `;
        }
    }
    templates.PageTemplate = PageTemplate;
})(templates = exports.templates || (exports.templates = {}));
;
//# sourceMappingURL=newFile.js.map