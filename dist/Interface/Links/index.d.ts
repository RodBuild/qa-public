declare const linkIsDisplayedAndVerifyHref: (selector: WebdriverIO.Element | string, href: string, timeout: number) => Promise<void>;
declare const linkIsDisplayedAndEnabled: (selector: WebdriverIO.Element | string, timeout: number) => Promise<void>;
export { linkIsDisplayedAndVerifyHref, linkIsDisplayedAndEnabled };
