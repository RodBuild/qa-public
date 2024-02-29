declare const browserResizeWindow: (view?: 'desktop' | 'tablet' | 'mobile', size?: {
    width?: number;
    height?: number;
}) => Promise<void>;
declare const browserGetTitle: () => Promise<string>;
declare const browserGetDescription: () => Promise<string>;
/**
 * @param element Element to find after page loads, defaults to h1
 * @example browserOpenUrl('gummybears.com', 10000, 'h1')
 */
declare const browserOpenUrl: (url: string, timeout: number, element: string | undefined) => Promise<void>;
export { browserResizeWindow, browserGetTitle, browserGetDescription, browserOpenUrl };
