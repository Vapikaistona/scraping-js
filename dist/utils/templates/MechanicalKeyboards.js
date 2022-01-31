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
exports.mechanical_keyboards = void 0;
const puppeteer_1 = __importDefault(require("puppeteer"));
var mechanical_keyboards;
(function (mechanical_keyboards) {
    function getKeyboards(productLimit = 5) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = 'https://mechanicalkeyboards.com/shop/index.php?l=product_list&c=1&show=' + productLimit;
            const KEYBOARD_SECTION = `.wrap-imagebox .row`;
            const KEYBOARD_ITEM = `.product-box .imagebox `;
            const PRODUCT_IMAGES = `.box-image li > a > img[src]`;
            const PRODUCT_NAME = `.box-content .product-name > a`;
            const PRODUCT_PRICE = `.box-content .price > span`;
            const browser = yield puppeteer_1.default.launch();
            const page = yield browser.newPage();
            yield page.goto(url);
            const elements = yield page.waitForSelector(KEYBOARD_SECTION);
            const allProducts = [];
            for (let i = 1; i <= productLimit; i++) {
                const productDetails = yield elements.$(`:nth-child(${i}) ${KEYBOARD_ITEM}`);
                const productImages = yield productDetails.$$eval(PRODUCT_IMAGES, (images) => images.map((img) => img.src));
                const productName = yield productDetails.$(PRODUCT_NAME);
                const productNamevalue = yield productName.evaluate((el) => el.textContent);
                const productUrl = yield productName.evaluate((el) => el.href);
                const productPrice = yield productDetails.$(PRODUCT_PRICE);
                const productPricevalue = yield productPrice.evaluate(el => el.textContent);
                allProducts.push({ 'name': productNamevalue, price: productPricevalue, url: productUrl, images: productImages });
            }
            const completeDetailList = [];
            for (let product of allProducts) {
                const newDetails = yield getAllProductDetails(product.url, page);
                completeDetailList.push(Object.assign(Object.assign({}, product), newDetails));
            }
            yield browser.close();
            return completeDetailList;
        });
    }
    mechanical_keyboards.getKeyboards = getKeyboards;
    ;
})(mechanical_keyboards = exports.mechanical_keyboards || (exports.mechanical_keyboards = {}));
;
function getAllProductDetails(productUrl, page) {
    return __awaiter(this, void 0, void 0, function* () {
        yield page.goto(productUrl);
        const completeDetails = yield page.evaluate(() => {
            const sku = document.querySelector('.product-id > .id').textContent;
            const videos = [...document.querySelectorAll('.video-container > iframe')].map((element) => element.src);
            const categories = [...document.querySelectorAll('ul.breadcrumbs > li > a')].map((element) => element.textContent).slice(-2);
            const features = [...document.querySelectorAll('ul.acc_features > li')].map((element) => element.textContent);
            const specs = [...document.querySelectorAll('table.v3_specs tr')].map((element) => {
                const id = element.querySelector('.field').textContent.split(' ').join('_').toLowerCase();
                const value = element.querySelector('.value').textContent;
                return { [id]: value };
            });
            const switches = [...document.querySelectorAll('table.edition_switch_list > tbody > tr')].map((element) => {
                const swtch = element.querySelector('.switch');
                const sku = swtch.querySelector('div').textContent;
                const nameElement = swtch.querySelector('a');
                let name = '';
                if (nameElement) {
                    name = nameElement.textContent;
                }
                else {
                    name = swtch.innerText.split('\n')[0];
                }
                const price = element.querySelector('.price').textContent;
                return { name, sku, price };
            });
            return { sku, videos, categories, features, specs, switches };
        });
        return completeDetails;
    });
}
//# sourceMappingURL=MechanicalKeyboards.js.map