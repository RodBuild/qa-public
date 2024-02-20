"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.browserGetDescription = exports.browserGetTitle = exports.browserResizeWindow = void 0;
const browserResizeWindow = async (view, size) => {
    if (view) {
        if (view === 'desktop')
            await browser.setWindowSize(1500, 1200);
        if (view === 'tablet')
            await browser.setWindowSize(768, 900);
        if (view === 'mobile')
            await browser.setWindowSize(375, 667);
    }
    else {
        const width = size?.width ?? 500;
        const height = size?.height ?? 500;
        await browser.setWindowSize(width, height);
    }
};
exports.browserResizeWindow = browserResizeWindow;
const browserGetTitle = async () => {
    const text = await browser.getTitle();
    return text;
};
exports.browserGetTitle = browserGetTitle;
const browserGetDescription = async () => {
    const text = (await $('meta[name="description"]')).getAttribute('content');
    return text;
};
exports.browserGetDescription = browserGetDescription;
//# sourceMappingURL=index.js.map