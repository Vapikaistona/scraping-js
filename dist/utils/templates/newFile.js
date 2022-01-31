"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.templates = void 0;
var templates;
(function (templates) {
    class PageTemplate {
        constructor(pageInfo) {
            this.template =
                `import puppeteer from 'puppeteer';
            export module ${pageInfo.name} {
                export async function getKeyboards(){
                    const url = '${pageInfo.url}';
                    const browser = await puppeteer.launch();
                    const page = await browser.newPage();
                    await page.goto(url);
                    const products = await page.evaluate(() => {
                
                    });
                    await browser.close();
                    return products;
                }
                export async function getSwitches(){
                    const url = '${pageInfo.url}';
                    const browser = await puppeteer.launch();
                    const page = await browser.newPage();
                    await page.goto(url);
                    const products = await page.evaluate(() => {
                
                    });
                    await browser.close();
                    return products;
                }
                export async function getOther(){
                    const url = '${pageInfo.url}';
                    const browser = await puppeteer.launch();
                    const page = await browser.newPage();
                    await page.goto(url);
                    const products = await page.evaluate(() => {
                
                    });
                    await browser.close();
                    return products;
                }
            }
            `;
        }
    }
    templates.PageTemplate = PageTemplate;
})(templates = exports.templates || (exports.templates = {}));
;
//# sourceMappingURL=newFile.js.map