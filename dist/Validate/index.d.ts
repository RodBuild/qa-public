/**
 * Get a DOM element using the selector parameter
 * @param selector The target element
 * @example
 * const sectionTitle = await getElement('[data-testid="header-2-id"]')
 * const sectionSubTitle = await getElement($('[data-testid="subheader-2-id"]'))
 */
declare const getElement: (selector: string | WebdriverIO.Element | Promise<WebdriverIO.Element>) => Promise<WebdriverIO.Element>;
declare const objectIsArray: (object: any) => boolean;
declare const objectIsString: (object: any) => boolean;
declare const objectIsNumber: (object: any) => boolean;
export { getElement, objectIsArray, objectIsString, objectIsNumber };
