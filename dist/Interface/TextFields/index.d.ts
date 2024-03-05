declare const inputIsDisplayAndInsertText: (selector: WebdriverIO.Element | string, text: string, timeout: number) => Promise<void>;
declare const inputIsDisplayedAndRemoveText: (selector: WebdriverIO.Element | string, timeout: number) => Promise<void>;
export { inputIsDisplayAndInsertText, inputIsDisplayedAndRemoveText };
