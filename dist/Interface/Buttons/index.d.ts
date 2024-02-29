import * as Element from '../Element/index';
declare const buttonIsDisplayedAndClickable: (selector: WebdriverIO.Element | string, timeout: number) => Promise<void>;
declare const buttonIsDisplayedAndNotClickable: (selector: WebdriverIO.Element | string, timeout: number) => Promise<void>;
export { buttonIsDisplayedAndClickable, buttonIsDisplayedAndNotClickable };
